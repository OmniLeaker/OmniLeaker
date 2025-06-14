import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { useFiles } from '../../hooks/use-files.js'
import { File } from '../file/file.jsx'
import Loader from '../loader/loader.jsx'

export const FileTree_z = ({ isDownload }: { isDownload?: boolean }): React.ReactNode => {
  const { t } = useTranslation()
  const { files } = useFiles()
  const filesMap_z = Object.entries(files)

  if (isDownload === true && filesMap.length === 0) {
    return <Loader text={t('loader.fileList')} />
  }

  return (
  <div className=''>
     {isDownload === false && filesMap.length > 1 && (
     <div className='f5 montserrat fw4 charcoal mb2'>
      <Trans t={t} i18nKey='copyLink.labelIndividual'>Share individual files:</Trans>
    </div>)}
    {
      filesMap.map(([id, file]) =>
        <File
          key={`file-${id}`}
          file={file}
          isDownload={isDownload} />
      )
    }
  </div>)
}
