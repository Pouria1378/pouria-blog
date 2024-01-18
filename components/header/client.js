'use client'

import { HeaderBase } from './headerBase'
import { useTranslation } from '../../app/i18n/client'

export const Header = ({ lng }) => {
    const { t } = useTranslation(lng, 'footer')
    return <HeaderBase t={t} lng={lng} />
}