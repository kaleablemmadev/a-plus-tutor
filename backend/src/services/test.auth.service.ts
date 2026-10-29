// services/test.auth.service.ts

import { loginTutor, registerTutor } from "./auth.service.js";
import type { RegisterTutorInput, LoginTutorInput } from "../schemas/auth.schema.js";

const successfulRegisterInputA: RegisterTutorInput = {
    userName: 'promiselemma',
    fullName: 'Promise Lemma',
    email: 'pro17miselemma@gmail.com',
    phoneNumber: '+251951109963',
    password: 'Promise@625',
    confirmPassword: 'Promise@625',
    gender: 'MALE',
    educationStatus: 'NONGRADUATE'
}

const successfulRegisterInputB: RegisterTutorInput = {
    userName: 'mahletkinfe',
    fullName: 'Mahlet Kinfe',
    email: 'mahletkinfe45@gmail.com',
    phoneNumber: '0976543421',
    password: 'Mahlet@777',
    confirmPassword: 'Mahlet@777',
    gender: 'FEMALE',
    educationStatus: 'GRADUATE'
}

const usernameExists: RegisterTutorInput = {
    userName: 'promiselemma',
    fullName: 'Leul Yalem',
    email: 'leulyalemdev@gmail.com',
    phoneNumber: '+251951150963',
    password: '12345678',
    confirmPassword: '12345678',
    gender: 'MALE',
    educationStatus: 'GRADUATE'
}

const emailExists: RegisterTutorInput = {
    userName: 'dagimtariku',
    fullName: 'Dagim Tariku',
    email: 'promiselemma@gmail.com',
    phoneNumber: '+251901190969',
    password: '12345678',
    confirmPassword: '12345678',
    gender: 'MALE',
    educationStatus: 'NONGRADUATE'
}

const phoneExists: RegisterTutorInput = {
    userName: 'leulyalem',
    fullName: 'Leul Yalem',
    email: 'leulyalemdev@gmail.com',
    phoneNumber: '+251951109963',
    password: '12345678',
    confirmPassword: '12345678',
    gender: 'MALE',
    educationStatus: 'GRADUATE'
}

const mismatchedPasswordInput: RegisterTutorInput = {
    userName: 'girumkebru',
    fullName: 'Girum Kebru',
    email: 'girumkebru@gmail.com',
    phoneNumber: '+251967879845',
    password: 'Promise@625',
    confirmPassword: 'Girum@625',
    gender: 'MALE',
    educationStatus: 'NONGRADUATE'
}

const invalidPhoneInput: RegisterTutorInput = {
    userName: 'kbgirma',
    fullName: 'Kebron Girma',
    email: 'kbgirma543@gmail.com',
    phoneNumber: '+25199813211',
    password: 'Promise@625',
    confirmPassword: 'Promise@625',
    gender: 'FEMALE',
    educationStatus: 'GRADUATE'
}

const invalidEmailInput: RegisterTutorInput = {
    userName: 'kbgirma',
    fullName: 'Kebron Girma',
    email: 'kbgirma@gmailcom',
    phoneNumber: '+251998123211',
    password: 'Promise@625',
    confirmPassword: 'Promise@625',
    gender: 'FEMALE',
    educationStatus: 'GRADUATE'
}

const shortUserNameInput: RegisterTutorInput = {
    userName: 'kb',
    fullName: 'Kebron Girma',
    email: 'kbgirma@gmail.com',
    phoneNumber: '+251998123211',
    password: 'Promise@625',
    confirmPassword: 'Promise@625',
    gender: 'FEMALE',
    educationStatus: 'GRADUATE'
}

const shortFullNameInput: RegisterTutorInput = {
    userName: 'kbgirma',
    fullName: 'Kb',
    email: 'kbgirma@gmailcom',
    phoneNumber: '+251998123211',
    password: 'Promise@625',
    confirmPassword: 'Promise@625',
    gender: 'FEMALE',
    educationStatus: 'GRADUATE'
}

const shortPasswordInput: RegisterTutorInput = {
    userName: 'kbgirma',
    fullName: 'Kebron Girma',
    email: 'kbgirma@gmailcom',
    phoneNumber: '+251998123211',
    password: 'Promis',
    confirmPassword: 'Promis',
    gender: 'FEMALE',
    educationStatus: 'GRADUATE'
}

const correctLoginA: LoginTutorInput = {
    identifier: 'promiselemma',
    password: 'Promise@625'
}

const correctLoginB: LoginTutorInput = {
    identifier: '0976543421',
    password: 'Mahlet@777'
}

const correctLoginC: LoginTutorInput = {
    identifier: 'mahletkinfe45@gmail.com',
    password: 'Mahlet@777'
}

console.log(await loginTutor(correctLoginB));