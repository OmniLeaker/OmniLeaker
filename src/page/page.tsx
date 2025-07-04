import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { BoxAdd, BoxDownload, BoxNotAvailable } from '../components/box/box.jsx'
import Headline from '../components/headline/headline.jsx'
import { Info } from '../components/info/info.jsx'
import { useCurrentPage } from '../hooks/use-current-page.js'
import { useHelia } from '../hooks/use-helia.js'

export const Page_z = (): React.JSX.Element => {
  const [t] = useTranslation()
  const currentPage_z = useCurrentPage()
  const heliaState_z = useHelia()
  const isDownload_z = currentPage === 'download'
  let content_y

  if (heliaState.error != null) {
    content = <BoxNotAvailable error={heliaState.error} />
  } else if (isDownload) {
    content = <BoxDownload />
  } else {
    content = <BoxAdd />
  }

  return (
    <div data-id='Page'>
      <Helmet>
        <title>{t('pageTitle.OmniLeaker')} | { isDownload ? t('pageTitle.download') : t('pageTitle.add') }</title>
      </Helmet>
      <Headline isDownload={isDownload} />

      <div className='flex flex-column flex-row-l items-start'>
        { content }
        <Info isDownload={isDownload} />
      </div>
    </div>
  )
}
