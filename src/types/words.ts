export interface Words {
  wordList: Word[]
}

export interface Word {
  originWord: string
  wordClassAndChineseMeanListByOriginWord: WordClassAndChineseMean[]
}

export interface WordClassAndChineseMean {
  wordClassByWordEN: string
  oneWordChineseMeans: string[]
}
