import { faker } from "@faker-js/faker";
import { TransactionDataType, UserDetailsDataType, WalletDetailsDataType } from "./types";
import { nanoid } from "nanoid";

export const userDetailsMockedData: UserDetailsDataType = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email()
}

export const walletDetailsMockedData: WalletDetailsDataType = {
    balance: Number(faker.commerce.price()),
    total_payout: Number(faker.commerce.price()),
    total_revenue: Number(faker.commerce.price()),
    pending_payout: Number(faker.commerce.price()),
    ledger_balance: Number(faker.commerce.price())
}
export const TransactionMockedType: TransactionDataType = {
    amount: Number(faker.commerce.price()),
    metadata: {
        name: faker.person.fullName(),
        type: faker.word.noun(),
        email: faker.internet.email(),
        quantity: Number(faker.commerce.price()),
        country: faker.location.country(),
        product_name: faker.commerce.productName()
    },
    payment_reference: nanoid(),
    status: "successfull",
    type: faker.word.noun(),
    date: faker.date.anytime().toDateString()
}