import { expect } from 'chai'
import {
  flatten,
  contains,
  compose
} from 'ramda'

import { negativeDarkMatter } from './index'

const echoOfHopelessness = [
  ['oblivion', 'oblivion', 'hope'],
  ['oblivion', 'hope', 'oblivion'],
  ['oblivion', 'oblivion', 'oblivion']
]

const findHopeInUniverse = compose(
  contains('hope'),
  flatten
)

describe('negative dark matter', () => {
  it('exists', () => {
    expect(negativeDarkMatter).to.be.an('array')
    expect(negativeDarkMatter[0]).to.be.an('array')
  })

  describe('hope', () => {
    it('exists in unviverse', () => {
      expect(findHopeInUniverse(negativeDarkMatter)).to.be.true
    })
  })

  describe.skip('entropy', () => {
    context('dopamine < 2', () => {
      it('should kill hope', () => {
        const degradedNegativeDarkMatter = entropy(
          echoOfHopelessness[1][1],
          echoOfHopelessness
        )

        expect(degradedNegativeDarkMatter[1][1]).to.equal('oblivion')
      })
    })
  })
})
