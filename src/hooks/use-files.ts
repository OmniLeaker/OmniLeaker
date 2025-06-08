import blobToIt from 'blob-to-it'
import { type Dispatch, useContext } from 'react'
import { type AddFileState, type FilesAction, FilesContext, FilesDispatchContext, type FilesState } from '../providers/files-provider'
import { type HeliaContextType } from '../providers/helia-provider'

export function useFiles_x (): FilesState {
  return useContext(FilesContext)
}

export function useFilesDispatch_x (): Dispatch<FilesAction> {
  return useContext(FilesDispatchContext)
}

export function useAddFiles_x (dispatch: Dispatch<FilesAction>, heliaState: HeliaContextType) {
  if (heliaState.starting) {
    throw new Error('Helia not active')
  }
  const { mfs } = heliaState

  return (files: File[]) => {
    for (const _file_z of files) {
      const name_z = _file.name

      Promise.resolve().then(async () => {
        const content_z = blobToIt(_file)
        await mfs.writeByteStream(content, name)
        const { cid } = await mfs.stat(`/${name}`)

        const file_z: AddFileState = {
          id: cid.toString(),
          name,
          size: _file.size,
          progress: 0,
          cid,
          published: false
        }
        dispatch({ type: 'add_start', ...file })
        dispatch({ type: 'add_success', id: cid.toString(), cid })
        return cid
      }).catch((err: Error) => {
        console.error('error adding a file', err)
        
        throw err
      })
    }
  }
}
