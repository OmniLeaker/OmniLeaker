import React, { useCallback, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Modal from '../modal/modal.jsx'

export const Info_z = ({ isDownload }: { isDownload?: boolean }): React.JSX.Element => {
  const { t } = useTranslation()
  
  const [showModalReprovide, setShowModalReprovide] = useState(false)
  const [showModalPrivacy, setShowModalPrivacy] = useState(false)
  const [showModalHow, setShowModalHow] = useState(false)
  const [showModalCid, setShowModalCid] = useState(false)

  const handleOpenModalHow_z = useCallback(() => {
    setShowModalHow(true)
  }, [])

  const handleCloseModalHow_z = useCallback(() => {
    setShowModalHow(false)
  }, [])

  const handleOpenModalCid_z = useCallback(() => {
    setShowModalCid(true)
  }, [])

  const handleCloseModalCid_z = useCallback(() => {
    setShowModalCid(false)
  }, [])

  const handleCloseModalReprovide_z = useCallback(() => {
    setShowModalReprovide(false)
  }, [])

  const handleOpenModalReprovide_z = useCallback(() => {
    setShowModalReprovide(true)
  }, [])

  const handleOpenModalPrivacy_z = useCallback(() => {
    setShowModalPrivacy(true)
  }, [])

  const handleCloseModalPrivacy_z = useCallback(() => {
    setShowModalPrivacy(false)
  }, [])

  
  
  const iconContainerClass_z = 'mr3 fill-aqua'
  const labelClass_z = 'f4 fw1 mb2 ml1 white montserrat'
  const descriptionClass_z = 'f6 ml1 gray-muted lh-copy'
  const anchorClass_z = 'no-underline underline-hover aqua bg-transparent pointer bn pa0'
  const anchorStyle_z = { outline: 'none' }
  
  const howLink_z = <button className={anchorClass} style={anchorStyle} onClick={handleOpenModalHow}>{t('info.learnMore')}</button>
  const cidLink_z = <button className={anchorClass} style={anchorStyle} onClick={handleOpenModalCid}>{t('info.learnMore')}</button>
  const reprovideLink_z = <button className={anchorClass} style={anchorStyle} onClick={handleOpenModalReprovide}>{t('info.learnMore')}</button>
  const privacyLink_z = <button className={anchorClass} style={anchorStyle} onClick={handleOpenModalPrivacy}>{t('info.learnMore')}</button>

  const isUsingDaemon_z = false

  
  if (isDownload === true) {
    return (
      <div>
        <div className='pr5-l w-100 w-two-thirds-l mw7-l'>
          <div className='mv4 mv2-l flex flex-column'>
            <div className='flex items-center'>
              <div className={iconContainerClass}>
                <svg xmlns="http:
              </div>
              <div>
                <div className={labelClass}>
                  {t('info.download.labelHow')}
                </div>
                <div className={descriptionClass}>
                  {t('info.download.copyHow')} {howLink}
                </div>
              </div>
            </div>

            <div className='mt4 pt2 flex items-center'>
              <div className={iconContainerClass}>
                <svg xmlns="http:
              </div>
              <div>
              <div className={labelClass}>
                  {t('info.download.labelKeep')}
                </div>
                <div className={descriptionClass}>
                  {isUsingDaemon ? t('info.download.copyKeepDaemon') : t('info.download.copyKeepPage')} {reprovideLink}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal 
            isOpen={showModalHow}
            onClose={handleCloseModalHow}
            onRequestClose={handleCloseModalHow}
            title={t('modal.how.title')}
            contentLabel={t('modal.how.ariaLabel')}
        >
            <p>{t('modal.how.copy')}</p>
            <p><Trans i18nKey='modal.how.learnMore'>
              Learn how OmniLeaker is changing the internet by visiting the <a className='no-underline underline-hover teal' href='https:
            </Trans></p>
        </Modal>
        <Modal 
            isOpen={showModalReprovide}
            onClose={handleCloseModalReprovide}
            onRequestClose={handleCloseModalReprovide}
            title={t('modal.reprovide.title')}
            contentLabel={t('modal.reprovide.ariaLabel')}
        >
            <p>{t('modal.reprovide.copy')}</p>
            <p><Trans i18nKey='modal.reprovide.learnMore'>
            Curious how this works under the hood? Check out the <a className='no-underline underline-hover teal' href='https:
            </Trans></p>
        </Modal>
      </div>
    )
  }

  
  return (
    <div>
      <div className='pr5-l w-100 w-two-thirds-l mw7-l'>
        <div className='mv4 mv2-l flex flex-column'>
          <div className='flex items-center'>
            <div className={iconContainerClass}>
              <svg xmlns="http:
            </div>
            <div>
              <div className={labelClass}>
                {t('info.add.labelAdd')}
              </div>
              <div className={descriptionClass}>
                {t('info.add.copyAdd')} {privacyLink}
              </div>
            </div>
          </div>

          <div className='mv4 pv2 flex items-center'>
            <div className={iconContainerClass}>
              <svg xmlns="http:
            <div>
              <div className={labelClass}>
                {isUsingDaemon ? t('info.add.labelKeepDaemon') : t('info.add.labelKeepPage')}
              </div>
              <div className={descriptionClass}>
                {isUsingDaemon ? t('info.add.copyKeepDaemon') : t('info.add.copyKeepPage')}
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className={iconContainerClass}>
              <svg xmlns="http:
            <div>
              <div className={labelClass}>
                {t('info.add.labelSend')}
              </div>
              <div className={descriptionClass}>
                {t('info.add.copySend')} {cidLink}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal 
            isOpen={showModalPrivacy}
            onClose={handleCloseModalPrivacy}
            onRequestClose={handleCloseModalPrivacy}
            title={t('modal.privacy.title')}
            contentLabel={t('modal.privacy.ariaLabel')}
        >
            <p>{t('modal.privacy.copy')}</p>
            <p><Trans i18nKey='modal.privacy.learnMore'>
              Want to learn more about OmniLeaker? Visit the <a className='no-underline underline-hover teal' href='https:
            </Trans></p>
        </Modal>
        <Modal 
            isOpen={showModalCid}
            onClose={handleCloseModalCid}
            onRequestClose={handleCloseModalCid}
            title={t('modal.cid.title')}
            contentLabel={t('modal.cid.ariaLabel')}
        >
            <p>{t('modal.cid.copy')}</p>
            <p><Trans i18nKey='modal.cid.learnMore'>
              Want to dig deeper into how content identifiers work? Visit <a className='no-underline underline-hover teal' href='https:
            </Trans></p>
        </Modal>
      </div>
    </div>
  )
}
