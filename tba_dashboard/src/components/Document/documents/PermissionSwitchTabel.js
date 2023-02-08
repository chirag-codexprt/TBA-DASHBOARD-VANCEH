import React from 'react'
import PermissionSwitch from './PermissionSwitch'

const PermissionSwitchTabel = ({ formValues, handleCheck }) => {
    return (
        <>
            <PermissionSwitch
                name={"CNPJDOC"}
                label={"CNPJ"}
                defaultChecked={
                    formValues.CNPJDOC
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"CPFDOC"}
                label={"CPF dos sócios"}
                defaultChecked={
                    formValues.CPFDOC
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"socialContract"}
                label={"Contrato social"}
                defaultChecked={
                    formValues.socialContract
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"balanceIncome"}
                label={"Balanço / DRE 2021, 2022( assinado contador e cliente)"}
                defaultChecked={
                    formValues.balanceIncome
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"balanceSheet"}
                label={"Balancete 2021, 2022 (assinado contador e cliente)"}
                defaultChecked={
                    formValues.balanceSheet
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"partnerIncome"}
                label={"IR dos sócios"}
                defaultChecked={
                    formValues.partnerIncome
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"billingCustomer"}
                label={"Faturamento 2020,2021 e 2022 (assinado contador e cliente)"}
                defaultChecked={
                    formValues.billingCustomer
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"partnerDocument"}
                label={"Documentos Sócios (CNH ou RG)"}
                defaultChecked={
                    formValues.partnerDocument
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"updatedBankDebt"}
                label={"Endividamento bancário atualizado"}
                defaultChecked={
                    formValues.updatedBankDebt
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"addressProof"}
                label={"Comprovante de endereço dos sócios"}
                defaultChecked={
                    formValues.addressProof
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />


            <PermissionSwitch
                name={"spouseDocument"}
                label={"Documentos do cônjuge"}
                defaultChecked={
                    formValues.spouseDocument
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"extractBusiestBank"}
                label={"Extrato dos últimos 30 dias do banco que mais movimenta"}
                defaultChecked={
                    formValues.extractBusiestBank
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"companyPhotos"}
                label={"Fotos da empresa"}
                defaultChecked={
                    formValues.companyPhotos
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />
            <PermissionSwitch
                name={"abcCurve"}
                label={"Curva ABC"}
                defaultChecked={
                    formValues.abcCurve
                }
                handleCheck={handleCheck}
            // checked={`${formValues}.${obj?.type}`}
            />

        </>
    )
}

export default PermissionSwitchTabel