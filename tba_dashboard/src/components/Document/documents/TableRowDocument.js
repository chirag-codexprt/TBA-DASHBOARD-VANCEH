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
	return (
		<>
			<CnpjNumber obj={obj} />
			<CpfNumber obj={obj} />
			<SocialContract
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<ProofOfAddress
				obj={obj}
				handleShowImageModal={handleShowImageModal}
				// handleShowAddressModal={handleShowAddressModal}
			/>
			<BalanceIncome
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<BalanceSheet
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<BillingCustomer
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<PartnerIncome
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<UpdatedBankDebt
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<PartnerDocument
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<SpouseDocument
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<CompanyPhotos
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<ExtractBusiestBank
				obj={obj}
				handleShowImageModal={handleShowImageModal}
			/>
			<AbcCurve obj={obj} handleShowImageModal={handleShowImageModal} />
		</>
	);
};

export default TableRowDocument;
