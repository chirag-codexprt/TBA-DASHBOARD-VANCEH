import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import AbcCurve from "../Cards/AbcCurve";
import BalanceIncome from "../Cards/BalanceIncome";
import BalanceSheet from "../Cards/BalanceSheet";
import BillingCustomer from "../Cards/BillingCustomer";
import CnpjNumber from "../Cards/CnpjNumber";
import CompanyPhotos from "../Cards/CompanyPhotos";
import CpfNumber from "../Cards/CpfNumber";
import ExtractBusiestBank from "../Cards/ExtractBusiestBank";
import PartnerDocument from "../Cards/PartnerDocument";
import PartnerIncome from "../Cards/PartnerIncome";
import ProofOfAddress from "../Cards/ProofOfAddress";
import SocialContract from "../Cards/SocialContract";
import SpouseDocument from "../Cards/SpouseDocument";
import UpdatedBankDebt from "../Cards/UpdatedBankDebt";

const TableRowDocument = ({
	obj,
	handleShowImageModal,
	handleShowAddressModal,
}) => {
	const permission = obj?.documentRequest?.requiredPermission;
	console.log("permission", permission);

	return (
		<>
			{permission?.CPFDOC && (
				<CpfNumber
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}

			{permission?.CNPJDOC && (
				<CnpjNumber
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}

			{permission?.socialContract && (
				<SocialContract
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.addressProof && (
				<ProofOfAddress
					obj={obj}
					handleShowImageModal={handleShowImageModal}
					// handleShowAddressModal={handleShowAddressModal}
				/>
			)}
			{permission?.balanceIncome && (
				<BalanceIncome
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.balanceSheet && (
				<BalanceSheet
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.billingCustomer && (
				<BillingCustomer
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.partnerIncome && (
				<PartnerIncome
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.updatedBankDebt && (
				<UpdatedBankDebt
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.partnerDocument && (
				<PartnerDocument
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.spouseDocument && (
				<SpouseDocument
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.companyPhotos && (
				<CompanyPhotos
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.extractBusiestBank && (
				<ExtractBusiestBank
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
			{permission?.abcCurve && (
				<AbcCurve
					obj={obj}
					handleShowImageModal={handleShowImageModal}
				/>
			)}
		</>
	);
};

export default TableRowDocument;
