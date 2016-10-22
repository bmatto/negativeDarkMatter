/* eslint-disable no-plusplus, import/prefer-default-export */

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function hopeSyringe() {
  const destiny = getRandomArbitrary(0, 3)

  if (destiny === 1) {
    return 'hope'
  }

  return 'oblivion'
}

// eslint-disable-next-line complexity
function generateHopelessness(lengthOfHopelessness, breadthOfHopelessness) {
  const hopelessness = []

  for (let i = 0; i < lengthOfHopelessness; i++) {
    const rowOfHopelessness = []

    for (let x = 0; x < breadthOfHopelessness; x++) {
      rowOfHopelessness.push(hopeSyringe())
    }

    hopelessness.push(rowOfHopelessness)
  }

  return hopelessness
}

export const negativeDarkMatter = generateHopelessness(10, 10)
