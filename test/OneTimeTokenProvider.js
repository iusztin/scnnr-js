import nock from 'nock'
import sinon from 'sinon'
import { expect } from 'chai'

import scnnr from '../dist/scnnr.esm'

describe('OneTimeTokenProvider', () => {
  const publicAPIKey = 'dummy-public-key'
  const options = {
    url: 'https://dummy.scnnr.cubki.jp/',
    version: 'v1',
  }
  const provider = new scnnr.OneTimeTokenProvider(publicAPIKey, options)
  const oneTimeToken = 'this-is-one-time-token'
  const tokenResponseBody = {
    'expires_in': 900,
    'scopes': ['recognitions'],
    'type': 'one-time',
    'value': oneTimeToken,
  }

  describe('get', () => {
    before(() => provider.storeToken(tokenResponseBody))

    it('returns a one-time-token and remove it from cache', () => {
      return provider.get(options)
        .then(token => expect(token).to.equal(oneTimeToken))
        .then(() => expect(provider.token).to.be.null)
    })
  })

  describe('retrieve', () => {
    context('when a one-time-token is not cached', () => {
      it('issues a token and cache it', () => {
        nock(options.url + options.version, { reqheaders: { 'x-api-key': publicAPIKey } })
          .post('/auth/tokens', JSON.stringify({ type: 'one-time' }))
          .reply(200, tokenResponseBody)
        return provider.retrieve(options)
          .then(result => expect(result).to.be.undefined)
          .then(() => expect(provider.token).to.equal(oneTimeToken))
      })
    })

    context('when a one-time-token is already cached', () => {
      before(() => provider.storeToken(tokenResponseBody))

      it('does nothing', () => {
        return provider.retrieve(options)
          .then(result => expect(result).to.be.undefined)
          .then(() => expect(provider.token).to.equal(oneTimeToken))
      })
    })

    describe('about token expiration', () => {
      let clock
      before(() => {
        clock = sinon.useFakeTimers()
        provider.storeToken(tokenResponseBody)
      })
      after(() => clock.restore())

      it('reserves to delete the cache', () => {
        return provider.retrieve(options)
          .then(() => expect(provider.token).to.equal(oneTimeToken))
          .then(() => clock.tick(tokenResponseBody.expires_in * (1 - provider.marginToExpire) * 1000))
          .then(() => expect(provider.token).to.be.null)
      })
    })
  })

  describe('issue', () => {
    it('calls an API to issue a one-time-token and returns the response data', () => {
      nock(options.url + options.version, { reqheaders: { 'x-api-key': publicAPIKey } })
        .post('/auth/tokens', JSON.stringify({ type: 'one-time' }))
        .reply(200, tokenResponseBody)

      return provider.issue(options).then(data => expect(data).to.deep.equal(tokenResponseBody))
    })
  })
})
