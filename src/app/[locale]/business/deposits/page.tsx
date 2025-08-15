import DepositsAccounts from '@/ui/business/depositsAccounts/DepositsAccounts'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Deposits() {
    const t = useTranslations()
  return (
    <div className=' container md:text-[40px] text-[30px] md:leading-[48px] leading-[40px] font-bold md:display2 mb-4.2 mt-1 md:my-7'>
        <DepositsAccounts title={t("depositsAccounts.title")} />
    </div>
  )
}
