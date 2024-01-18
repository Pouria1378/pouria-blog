import { useTranslation } from '../../app/i18n'
import { HeaderBase } from './headerBase'

export const Header = async ({ lng }) => {
    const { t } = await useTranslation(lng)
    return <HeaderBase t={t} lng={lng} />
}