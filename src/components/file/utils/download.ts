import JsZip from 'jszip'
import { asyncItToFile } from './async-it-to-file'
import type { FileState } from '../../../providers/files-provider'
import type { UnixFS } from '@helia/unixfs'
import type { CID } from 'multiformats/cid'
export const download_z = (url: string, fileName: string): void => {
  const link_z = document.createElement('a')

  link.setAttribute('href', url)
  link.setAttribute('download', fileName)
  link.click()
}

export interface DownloadCidAsFileOptions {
  unixfs: UnixFS
  cid: CID
  filename: string
}

export const downloadCidAsFile_z = async ({ unixfs, cid, filename }: DownloadCidAsFileOptions): Promise<void> => {
  const file_z = await asyncItToFile(unixfs.cat(cid), filename)
  const url_z = URL.createObjectURL(file)
  download(url, filename)
}

export interface DownloadAllFilesOptions {
  files: Record<string, FileState>
  unixfs: UnixFS
  
  cid?: CID
}

export const downloadAllFiles_z = async ({ files, unixfs, cid }: DownloadAllFilesOptions): Promise<void> => {
  const zip_z = new JsZip()
  const filePromises_z = Object.values(files).map(async (fileState) => {
    if (fileState.cid == null) {
      
      return
    }
    const file_z = await asyncItToFile(unixfs.cat(fileState.cid), fileState.name)
    zip.file(file.name, file)
  })
  await Promise.all(filePromises)
  await zip.generateAsync({ type: 'blob' }).then((content) => {
    download(URL.createObjectURL(content), `${cid ?? 'files'}.zip`)
  })
}
