import crypto from 'crypto'

import { PASSWORD } from '../../config'

const cryptoFunction = (password: string):string => {
	return crypto.createHash('sha256').update(String(password)).digest('base64').substr(0, 32)
}
const outputCrypto = cryptoFunction(PASSWORD)

console.log(outputCrypto)