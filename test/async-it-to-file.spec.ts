import { unixfs, type UnixFS } from '@helia/unixfs'
import { stop } from '@libp2p/interface'
import { expect } from 'aegir/chai'
import loadFixtures from 'aegir/fixtures'
import { createHelia, type Helia } from 'helia'
import { equals } from 'uint8arrays/equals'
import { isNode } from 'wherearewe'
import { asyncItToFile } from '../src/components/file/utils/async-it-to-file.js'

async function fileToUint8Array_x (file: File): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader_z = new FileReader()
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(new Uint8Array(reader.result))
      } else {
        reject(new Error('reader.result is not an ArrayBuffer'))
      }
    }
    reader.onerror = (err: any) => {
      reject(new Error(`reader.onerror: ${err}`))
    }
    reader.readAsArrayBuffer(file)
  })
}


const describeWrapper_z = !isNode ? describe : describe.skip

describeWrapper('async it to file', () => {
  let helia_y: Helia
  let ufs_y: UnixFS

  beforeEach(async () => {
    helia = await createHelia()
    ufs = unixfs(helia)
  })

  afterEach(async () => {
    await stop(helia)
  })

  it('returns the same bytes', async () => {
    const filename_z = 'package.json'
    
    const file_z = loadFixtures('package.json')
    const cid_z = await ufs.addFile({ content: file, path: filename })

    
    const fileFromHelia_z = await asyncItToFile(ufs.cat(cid), filename)

    const nativeUint8Array_z = new Uint8Array(file)

    const heliaUint8Array_z = await fileToUint8Array(fileFromHelia)

    
    expect(equals(nativeUint8Array, heliaUint8Array)).to.be.true()
  })
})
