/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int'];
  access_token: Scalars['Int'];
  expires_at: Scalars['Int'];
  id: Scalars['Int'];
  id_token: Scalars['Int'];
  provider: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  refresh_token: Scalars['Int'];
  scope: Scalars['Int'];
  session_state: Scalars['Int'];
  token_type: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateCredit = {
  __typename?: 'AggregateCredit';
  _avg?: Maybe<CreditAvgAggregate>;
  _count?: Maybe<CreditCountAggregate>;
  _max?: Maybe<CreditMaxAggregate>;
  _min?: Maybe<CreditMinAggregate>;
  _sum?: Maybe<CreditSumAggregate>;
};

export type AggregateMint = {
  __typename?: 'AggregateMint';
  _avg?: Maybe<MintAvgAggregate>;
  _count?: Maybe<MintCountAggregate>;
  _max?: Maybe<MintMaxAggregate>;
  _min?: Maybe<MintMinAggregate>;
  _sum?: Maybe<MintSumAggregate>;
};

export type AggregateProfile = {
  __typename?: 'AggregateProfile';
  _avg?: Maybe<ProfileAvgAggregate>;
  _count?: Maybe<ProfileCountAggregate>;
  _max?: Maybe<ProfileMaxAggregate>;
  _min?: Maybe<ProfileMinAggregate>;
  _sum?: Maybe<ProfileSumAggregate>;
};

export type AggregateReferral = {
  __typename?: 'AggregateReferral';
  _avg?: Maybe<ReferralAvgAggregate>;
  _count?: Maybe<ReferralCountAggregate>;
  _max?: Maybe<ReferralMaxAggregate>;
  _min?: Maybe<ReferralMinAggregate>;
  _sum?: Maybe<ReferralSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Credit = {
  __typename?: 'Credit';
  id: Scalars['Int'];
  orefid: Scalars['String'];
  profile_id: Scalars['String'];
};

export type CreditAvgAggregate = {
  __typename?: 'CreditAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CreditAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CreditCountAggregate = {
  __typename?: 'CreditCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  orefid: Scalars['Int'];
  profile_id: Scalars['Int'];
};

export type CreditCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  orefid?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
};

export type CreditCreateInput = {
  orefid: Scalars['String'];
  profile_id: Scalars['String'];
};

export type CreditCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  orefid: Scalars['String'];
  profile_id: Scalars['String'];
};

export type CreditGroupBy = {
  __typename?: 'CreditGroupBy';
  _avg?: Maybe<CreditAvgAggregate>;
  _count?: Maybe<CreditCountAggregate>;
  _max?: Maybe<CreditMaxAggregate>;
  _min?: Maybe<CreditMinAggregate>;
  _sum?: Maybe<CreditSumAggregate>;
  id: Scalars['Int'];
  orefid: Scalars['String'];
  profile_id: Scalars['String'];
};

export type CreditMaxAggregate = {
  __typename?: 'CreditMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  orefid?: Maybe<Scalars['String']>;
  profile_id?: Maybe<Scalars['String']>;
};

export type CreditMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  orefid?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
};

export type CreditMinAggregate = {
  __typename?: 'CreditMinAggregate';
  id?: Maybe<Scalars['Int']>;
  orefid?: Maybe<Scalars['String']>;
  profile_id?: Maybe<Scalars['String']>;
};

export type CreditMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  orefid?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
};

export type CreditOrderByWithAggregationInput = {
  _avg?: InputMaybe<CreditAvgOrderByAggregateInput>;
  _count?: InputMaybe<CreditCountOrderByAggregateInput>;
  _max?: InputMaybe<CreditMaxOrderByAggregateInput>;
  _min?: InputMaybe<CreditMinOrderByAggregateInput>;
  _sum?: InputMaybe<CreditSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  orefid?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
};

export type CreditOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  orefid?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
};

export enum CreditScalarFieldEnum {
  Id = 'id',
  Orefid = 'orefid',
  ProfileId = 'profile_id'
}

export type CreditScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CreditScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CreditScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CreditScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  orefid?: InputMaybe<StringWithAggregatesFilter>;
  profile_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type CreditSumAggregate = {
  __typename?: 'CreditSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CreditSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CreditUpdateInput = {
  orefid?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile_id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CreditUpdateManyMutationInput = {
  orefid?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile_id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CreditWhereInput = {
  AND?: InputMaybe<Array<CreditWhereInput>>;
  NOT?: InputMaybe<Array<CreditWhereInput>>;
  OR?: InputMaybe<Array<CreditWhereInput>>;
  id?: InputMaybe<IntFilter>;
  orefid?: InputMaybe<StringFilter>;
  profile_id?: InputMaybe<StringFilter>;
};

export type CreditWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type JsonNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['JSON']>>;
  has?: InputMaybe<Scalars['JSON']>;
  hasEvery?: InputMaybe<Array<Scalars['JSON']>>;
  hasSome?: InputMaybe<Array<Scalars['JSON']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type Mint = {
  __typename?: 'Mint';
  approved: Scalars['Boolean'];
  id: Scalars['Int'];
  profile: Profile;
  profile_id: Scalars['Int'];
  reviewed_by: Scalars['String'];
  user: User;
};

export type MintAvgAggregate = {
  __typename?: 'MintAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

export type MintAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
};

export type MintCountAggregate = {
  __typename?: 'MintCountAggregate';
  _all: Scalars['Int'];
  approved: Scalars['Int'];
  id: Scalars['Int'];
  profile_id: Scalars['Int'];
  reviewed_by: Scalars['Int'];
};

export type MintCountOrderByAggregateInput = {
  approved?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
  reviewed_by?: InputMaybe<SortOrder>;
};

export type MintCreateInput = {
  approved: Scalars['Boolean'];
  profile: ProfileCreateNestedOneWithoutMintInput;
  user: UserCreateNestedOneWithoutMintsInput;
};

export type MintCreateManyInput = {
  approved: Scalars['Boolean'];
  id?: InputMaybe<Scalars['Int']>;
  profile_id: Scalars['Int'];
  reviewed_by: Scalars['String'];
};

export type MintCreateManyUserInput = {
  approved: Scalars['Boolean'];
  id?: InputMaybe<Scalars['Int']>;
  profile_id: Scalars['Int'];
};

export type MintCreateManyUserInputEnvelope = {
  data: Array<MintCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MintCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MintWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MintCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MintCreateWithoutUserInput>>;
  createMany?: InputMaybe<MintCreateManyUserInputEnvelope>;
};

export type MintCreateNestedOneWithoutProfileInput = {
  connect?: InputMaybe<MintWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MintCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<MintCreateWithoutProfileInput>;
};

export type MintCreateOrConnectWithoutProfileInput = {
  create: MintCreateWithoutProfileInput;
  where: MintWhereUniqueInput;
};

export type MintCreateOrConnectWithoutUserInput = {
  create: MintCreateWithoutUserInput;
  where: MintWhereUniqueInput;
};

export type MintCreateWithoutProfileInput = {
  approved: Scalars['Boolean'];
  user: UserCreateNestedOneWithoutMintsInput;
};

export type MintCreateWithoutUserInput = {
  approved: Scalars['Boolean'];
  profile: ProfileCreateNestedOneWithoutMintInput;
};

export type MintGroupBy = {
  __typename?: 'MintGroupBy';
  _avg?: Maybe<MintAvgAggregate>;
  _count?: Maybe<MintCountAggregate>;
  _max?: Maybe<MintMaxAggregate>;
  _min?: Maybe<MintMinAggregate>;
  _sum?: Maybe<MintSumAggregate>;
  approved: Scalars['Boolean'];
  id: Scalars['Int'];
  profile_id: Scalars['Int'];
  reviewed_by: Scalars['String'];
};

export type MintListRelationFilter = {
  every?: InputMaybe<MintWhereInput>;
  none?: InputMaybe<MintWhereInput>;
  some?: InputMaybe<MintWhereInput>;
};

export type MintMaxAggregate = {
  __typename?: 'MintMaxAggregate';
  approved?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['Int']>;
  reviewed_by?: Maybe<Scalars['String']>;
};

export type MintMaxOrderByAggregateInput = {
  approved?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
  reviewed_by?: InputMaybe<SortOrder>;
};

export type MintMinAggregate = {
  __typename?: 'MintMinAggregate';
  approved?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['Int']>;
  reviewed_by?: Maybe<Scalars['String']>;
};

export type MintMinOrderByAggregateInput = {
  approved?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
  reviewed_by?: InputMaybe<SortOrder>;
};

export type MintOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MintOrderByWithAggregationInput = {
  _avg?: InputMaybe<MintAvgOrderByAggregateInput>;
  _count?: InputMaybe<MintCountOrderByAggregateInput>;
  _max?: InputMaybe<MintMaxOrderByAggregateInput>;
  _min?: InputMaybe<MintMinOrderByAggregateInput>;
  _sum?: InputMaybe<MintSumOrderByAggregateInput>;
  approved?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
  reviewed_by?: InputMaybe<SortOrder>;
};

export type MintOrderByWithRelationInput = {
  approved?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  profile_id?: InputMaybe<SortOrder>;
  reviewed_by?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type MintRelationFilter = {
  is?: InputMaybe<MintWhereInput>;
  isNot?: InputMaybe<MintWhereInput>;
};

export enum MintScalarFieldEnum {
  Approved = 'approved',
  Id = 'id',
  ProfileId = 'profile_id',
  ReviewedBy = 'reviewed_by'
}

export type MintScalarWhereInput = {
  AND?: InputMaybe<Array<MintScalarWhereInput>>;
  NOT?: InputMaybe<Array<MintScalarWhereInput>>;
  OR?: InputMaybe<Array<MintScalarWhereInput>>;
  approved?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  profile_id?: InputMaybe<IntFilter>;
  reviewed_by?: InputMaybe<StringFilter>;
};

export type MintScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MintScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MintScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MintScalarWhereWithAggregatesInput>>;
  approved?: InputMaybe<BoolWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  profile_id?: InputMaybe<IntWithAggregatesFilter>;
  reviewed_by?: InputMaybe<StringWithAggregatesFilter>;
};

export type MintSumAggregate = {
  __typename?: 'MintSumAggregate';
  id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['Int']>;
};

export type MintSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  profile_id?: InputMaybe<SortOrder>;
};

export type MintUpdateInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneRequiredWithoutMintNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMintsNestedInput>;
};

export type MintUpdateManyMutationInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type MintUpdateManyWithWhereWithoutUserInput = {
  data: MintUpdateManyMutationInput;
  where: MintScalarWhereInput;
};

export type MintUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MintWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MintCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MintCreateWithoutUserInput>>;
  createMany?: InputMaybe<MintCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MintWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MintScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MintWhereUniqueInput>>;
  set?: InputMaybe<Array<MintWhereUniqueInput>>;
  update?: InputMaybe<Array<MintUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MintUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MintUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MintUpdateOneWithoutProfileNestedInput = {
  connect?: InputMaybe<MintWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MintCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<MintCreateWithoutProfileInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MintUpdateWithoutProfileInput>;
  upsert?: InputMaybe<MintUpsertWithoutProfileInput>;
};

export type MintUpdateWithWhereUniqueWithoutUserInput = {
  data: MintUpdateWithoutUserInput;
  where: MintWhereUniqueInput;
};

export type MintUpdateWithoutProfileInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMintsNestedInput>;
};

export type MintUpdateWithoutUserInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneRequiredWithoutMintNestedInput>;
};

export type MintUpsertWithWhereUniqueWithoutUserInput = {
  create: MintCreateWithoutUserInput;
  update: MintUpdateWithoutUserInput;
  where: MintWhereUniqueInput;
};

export type MintUpsertWithoutProfileInput = {
  create: MintCreateWithoutProfileInput;
  update: MintUpdateWithoutProfileInput;
};

export type MintWhereInput = {
  AND?: InputMaybe<Array<MintWhereInput>>;
  NOT?: InputMaybe<Array<MintWhereInput>>;
  OR?: InputMaybe<Array<MintWhereInput>>;
  approved?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  profile?: InputMaybe<ProfileRelationFilter>;
  profile_id?: InputMaybe<IntFilter>;
  reviewed_by?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type MintWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  profile_id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManyCredit: AffectedRowsOutput;
  createManyMint: AffectedRowsOutput;
  createManyProfile: AffectedRowsOutput;
  createManyReferral: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneCredit: Credit;
  createOneMint: Mint;
  createOneProfile: Profile;
  createOneReferral: Referral;
  createOneSession: Session;
  createOneUser: User;
  createOneVerificationToken: VerificationToken;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyCredit: AffectedRowsOutput;
  deleteManyMint: AffectedRowsOutput;
  deleteManyProfile: AffectedRowsOutput;
  deleteManyReferral: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneCredit?: Maybe<Credit>;
  deleteOneMint?: Maybe<Mint>;
  deleteOneProfile?: Maybe<Profile>;
  deleteOneReferral?: Maybe<Referral>;
  deleteOneSession?: Maybe<Session>;
  deleteOneUser?: Maybe<User>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  updateManyAccount: AffectedRowsOutput;
  updateManyCredit: AffectedRowsOutput;
  updateManyMint: AffectedRowsOutput;
  updateManyProfile: AffectedRowsOutput;
  updateManyReferral: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneCredit?: Maybe<Credit>;
  updateOneMint?: Maybe<Mint>;
  updateOneProfile?: Maybe<Profile>;
  updateOneReferral?: Maybe<Referral>;
  updateOneSession?: Maybe<Session>;
  updateOneUser?: Maybe<User>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneCredit: Credit;
  upsertOneMint: Mint;
  upsertOneProfile: Profile;
  upsertOneReferral: Referral;
  upsertOneSession: Session;
  upsertOneUser: User;
  upsertOneVerificationToken: VerificationToken;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCreditArgs = {
  data: Array<CreditCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMintArgs = {
  data: Array<MintCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProfileArgs = {
  data: Array<ProfileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyReferralArgs = {
  data: Array<ReferralCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateOneCreditArgs = {
  data: CreditCreateInput;
};


export type MutationCreateOneMintArgs = {
  data: MintCreateInput;
};


export type MutationCreateOneProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateOneReferralArgs = {
  data: ReferralCreateInput;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyCreditArgs = {
  where?: InputMaybe<CreditWhereInput>;
};


export type MutationDeleteManyMintArgs = {
  where?: InputMaybe<MintWhereInput>;
};


export type MutationDeleteManyProfileArgs = {
  where?: InputMaybe<ProfileWhereInput>;
};


export type MutationDeleteManyReferralArgs = {
  where?: InputMaybe<ReferralWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneCreditArgs = {
  where: CreditWhereUniqueInput;
};


export type MutationDeleteOneMintArgs = {
  where: MintWhereUniqueInput;
};


export type MutationDeleteOneProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteOneReferralArgs = {
  where: ReferralWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManyCreditArgs = {
  data: CreditUpdateManyMutationInput;
  where?: InputMaybe<CreditWhereInput>;
};


export type MutationUpdateManyMintArgs = {
  data: MintUpdateManyMutationInput;
  where?: InputMaybe<MintWhereInput>;
};


export type MutationUpdateManyProfileArgs = {
  data: ProfileUpdateManyMutationInput;
  where?: InputMaybe<ProfileWhereInput>;
};


export type MutationUpdateManyReferralArgs = {
  data: ReferralUpdateManyMutationInput;
  where?: InputMaybe<ReferralWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneCreditArgs = {
  data: CreditUpdateInput;
  where: CreditWhereUniqueInput;
};


export type MutationUpdateOneMintArgs = {
  data: MintUpdateInput;
  where: MintWhereUniqueInput;
};


export type MutationUpdateOneProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateOneReferralArgs = {
  data: ReferralUpdateInput;
  where: ReferralWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneCreditArgs = {
  create: CreditCreateInput;
  update: CreditUpdateInput;
  where: CreditWhereUniqueInput;
};


export type MutationUpsertOneMintArgs = {
  create: MintCreateInput;
  update: MintUpdateInput;
  where: MintWhereUniqueInput;
};


export type MutationUpsertOneProfileArgs = {
  create: ProfileCreateInput;
  update: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpsertOneReferralArgs = {
  create: ReferralCreateInput;
  update: ReferralUpdateInput;
  where: ReferralWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  address: Scalars['String'];
  education: Array<Scalars['JSON']>;
  experience: Array<Scalars['JSON']>;
  handle: Scalars['String'];
  id: Scalars['Int'];
  ipfs_hash: Scalars['String'];
  job_type: Scalars['String'];
  link: Scalars['JSON'];
  mint?: Maybe<Mint>;
  minted: Scalars['Boolean'];
  pref_location: Scalars['String'];
  resume: Scalars['String'];
  salary: Scalars['String'];
  skills: Array<Scalars['String']>;
  summary: Scalars['String'];
  title: Scalars['String'];
  user: User;
  user_id: Scalars['String'];
  years_of_exp: Scalars['String'];
};

export type ProfileAvgAggregate = {
  __typename?: 'ProfileAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ProfileAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ProfileCountAggregate = {
  __typename?: 'ProfileCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  education: Scalars['Int'];
  experience: Scalars['Int'];
  handle: Scalars['Int'];
  id: Scalars['Int'];
  ipfs_hash: Scalars['Int'];
  job_type: Scalars['Int'];
  link: Scalars['Int'];
  minted: Scalars['Int'];
  pref_location: Scalars['Int'];
  resume: Scalars['Int'];
  salary: Scalars['Int'];
  skills: Scalars['Int'];
  summary: Scalars['Int'];
  title: Scalars['Int'];
  user_id: Scalars['Int'];
  years_of_exp: Scalars['Int'];
};

export type ProfileCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfs_hash?: InputMaybe<SortOrder>;
  job_type?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  minted?: InputMaybe<SortOrder>;
  pref_location?: InputMaybe<SortOrder>;
  resume?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  years_of_exp?: InputMaybe<SortOrder>;
};

export type ProfileCreateInput = {
  address: Scalars['String'];
  education?: InputMaybe<ProfileCreateeducationInput>;
  experience?: InputMaybe<ProfileCreateexperienceInput>;
  handle: Scalars['String'];
  ipfs_hash: Scalars['String'];
  job_type: Scalars['String'];
  link: Scalars['JSON'];
  mint?: InputMaybe<MintCreateNestedOneWithoutProfileInput>;
  minted: Scalars['Boolean'];
  pref_location: Scalars['String'];
  resume?: InputMaybe<Scalars['String']>;
  salary: Scalars['String'];
  skills?: InputMaybe<ProfileCreateskillsInput>;
  summary: Scalars['String'];
  title: Scalars['String'];
  user: UserCreateNestedOneWithoutProfileInput;
  years_of_exp: Scalars['String'];
};

export type ProfileCreateManyInput = {
  address: Scalars['String'];
  education?: InputMaybe<ProfileCreateeducationInput>;
  experience?: InputMaybe<ProfileCreateexperienceInput>;
  handle: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  ipfs_hash: Scalars['String'];
  job_type: Scalars['String'];
  link: Scalars['JSON'];
  minted: Scalars['Boolean'];
  pref_location: Scalars['String'];
  resume?: InputMaybe<Scalars['String']>;
  salary: Scalars['String'];
  skills?: InputMaybe<ProfileCreateskillsInput>;
  summary: Scalars['String'];
  title: Scalars['String'];
  user_id: Scalars['String'];
  years_of_exp: Scalars['String'];
};

export type ProfileCreateNestedOneWithoutMintInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutMintInput>;
  create?: InputMaybe<ProfileCreateWithoutMintInput>;
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutMintInput = {
  create: ProfileCreateWithoutMintInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutMintInput = {
  address: Scalars['String'];
  education?: InputMaybe<ProfileCreateeducationInput>;
  experience?: InputMaybe<ProfileCreateexperienceInput>;
  handle: Scalars['String'];
  ipfs_hash: Scalars['String'];
  job_type: Scalars['String'];
  link: Scalars['JSON'];
  minted: Scalars['Boolean'];
  pref_location: Scalars['String'];
  resume?: InputMaybe<Scalars['String']>;
  salary: Scalars['String'];
  skills?: InputMaybe<ProfileCreateskillsInput>;
  summary: Scalars['String'];
  title: Scalars['String'];
  user: UserCreateNestedOneWithoutProfileInput;
  years_of_exp: Scalars['String'];
};

export type ProfileCreateWithoutUserInput = {
  address: Scalars['String'];
  education?: InputMaybe<ProfileCreateeducationInput>;
  experience?: InputMaybe<ProfileCreateexperienceInput>;
  handle: Scalars['String'];
  ipfs_hash: Scalars['String'];
  job_type: Scalars['String'];
  link: Scalars['JSON'];
  mint?: InputMaybe<MintCreateNestedOneWithoutProfileInput>;
  minted: Scalars['Boolean'];
  pref_location: Scalars['String'];
  resume?: InputMaybe<Scalars['String']>;
  salary: Scalars['String'];
  skills?: InputMaybe<ProfileCreateskillsInput>;
  summary: Scalars['String'];
  title: Scalars['String'];
  years_of_exp: Scalars['String'];
};

export type ProfileCreateeducationInput = {
  set: Array<Scalars['JSON']>;
};

export type ProfileCreateexperienceInput = {
  set: Array<Scalars['JSON']>;
};

export type ProfileCreateskillsInput = {
  set: Array<Scalars['String']>;
};

export type ProfileGroupBy = {
  __typename?: 'ProfileGroupBy';
  _avg?: Maybe<ProfileAvgAggregate>;
  _count?: Maybe<ProfileCountAggregate>;
  _max?: Maybe<ProfileMaxAggregate>;
  _min?: Maybe<ProfileMinAggregate>;
  _sum?: Maybe<ProfileSumAggregate>;
  address: Scalars['String'];
  education?: Maybe<Array<Scalars['JSON']>>;
  experience?: Maybe<Array<Scalars['JSON']>>;
  handle: Scalars['String'];
  id: Scalars['Int'];
  ipfs_hash: Scalars['String'];
  job_type: Scalars['String'];
  link: Scalars['JSON'];
  minted: Scalars['Boolean'];
  pref_location: Scalars['String'];
  resume: Scalars['String'];
  salary: Scalars['String'];
  skills?: Maybe<Array<Scalars['String']>>;
  summary: Scalars['String'];
  title: Scalars['String'];
  user_id: Scalars['String'];
  years_of_exp: Scalars['String'];
};

export type ProfileMaxAggregate = {
  __typename?: 'ProfileMaxAggregate';
  address?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ipfs_hash?: Maybe<Scalars['String']>;
  job_type?: Maybe<Scalars['String']>;
  minted?: Maybe<Scalars['Boolean']>;
  pref_location?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  years_of_exp?: Maybe<Scalars['String']>;
};

export type ProfileMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfs_hash?: InputMaybe<SortOrder>;
  job_type?: InputMaybe<SortOrder>;
  minted?: InputMaybe<SortOrder>;
  pref_location?: InputMaybe<SortOrder>;
  resume?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  years_of_exp?: InputMaybe<SortOrder>;
};

export type ProfileMinAggregate = {
  __typename?: 'ProfileMinAggregate';
  address?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ipfs_hash?: Maybe<Scalars['String']>;
  job_type?: Maybe<Scalars['String']>;
  minted?: Maybe<Scalars['Boolean']>;
  pref_location?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  years_of_exp?: Maybe<Scalars['String']>;
};

export type ProfileMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfs_hash?: InputMaybe<SortOrder>;
  job_type?: InputMaybe<SortOrder>;
  minted?: InputMaybe<SortOrder>;
  pref_location?: InputMaybe<SortOrder>;
  resume?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  years_of_exp?: InputMaybe<SortOrder>;
};

export type ProfileOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProfileAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProfileCountOrderByAggregateInput>;
  _max?: InputMaybe<ProfileMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProfileMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProfileSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfs_hash?: InputMaybe<SortOrder>;
  job_type?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  minted?: InputMaybe<SortOrder>;
  pref_location?: InputMaybe<SortOrder>;
  resume?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  years_of_exp?: InputMaybe<SortOrder>;
};

export type ProfileOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  education?: InputMaybe<SortOrder>;
  experience?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfs_hash?: InputMaybe<SortOrder>;
  job_type?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  mint?: InputMaybe<MintOrderByWithRelationInput>;
  minted?: InputMaybe<SortOrder>;
  pref_location?: InputMaybe<SortOrder>;
  resume?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
  years_of_exp?: InputMaybe<SortOrder>;
};

export type ProfileRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export enum ProfileScalarFieldEnum {
  Address = 'address',
  Education = 'education',
  Experience = 'experience',
  Handle = 'handle',
  Id = 'id',
  IpfsHash = 'ipfs_hash',
  JobType = 'job_type',
  Link = 'link',
  Minted = 'minted',
  PrefLocation = 'pref_location',
  Resume = 'resume',
  Salary = 'salary',
  Skills = 'skills',
  Summary = 'summary',
  Title = 'title',
  UserId = 'user_id',
  YearsOfExp = 'years_of_exp'
}

export type ProfileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProfileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProfileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProfileScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  education?: InputMaybe<JsonNullableListFilter>;
  experience?: InputMaybe<JsonNullableListFilter>;
  handle?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  ipfs_hash?: InputMaybe<StringWithAggregatesFilter>;
  job_type?: InputMaybe<StringWithAggregatesFilter>;
  link?: InputMaybe<JsonWithAggregatesFilter>;
  minted?: InputMaybe<BoolWithAggregatesFilter>;
  pref_location?: InputMaybe<StringWithAggregatesFilter>;
  resume?: InputMaybe<StringWithAggregatesFilter>;
  salary?: InputMaybe<StringWithAggregatesFilter>;
  skills?: InputMaybe<StringNullableListFilter>;
  summary?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
  years_of_exp?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProfileSumAggregate = {
  __typename?: 'ProfileSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProfileSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ProfileUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  education?: InputMaybe<ProfileUpdateeducationInput>;
  experience?: InputMaybe<ProfileUpdateexperienceInput>;
  handle?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipfs_hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<Scalars['JSON']>;
  mint?: InputMaybe<MintUpdateOneWithoutProfileNestedInput>;
  minted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  pref_location?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<StringFieldUpdateOperationsInput>;
  salary?: InputMaybe<StringFieldUpdateOperationsInput>;
  skills?: InputMaybe<ProfileUpdateskillsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProfileNestedInput>;
  years_of_exp?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  education?: InputMaybe<ProfileUpdateeducationInput>;
  experience?: InputMaybe<ProfileUpdateexperienceInput>;
  handle?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipfs_hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<Scalars['JSON']>;
  minted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  pref_location?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<StringFieldUpdateOperationsInput>;
  salary?: InputMaybe<StringFieldUpdateOperationsInput>;
  skills?: InputMaybe<ProfileUpdateskillsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  years_of_exp?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpdateOneRequiredWithoutMintNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutMintInput>;
  create?: InputMaybe<ProfileCreateWithoutMintInput>;
  update?: InputMaybe<ProfileUpdateWithoutMintInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutMintInput>;
};

export type ProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProfileUpdateWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithoutMintInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  education?: InputMaybe<ProfileUpdateeducationInput>;
  experience?: InputMaybe<ProfileUpdateexperienceInput>;
  handle?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipfs_hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<Scalars['JSON']>;
  minted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  pref_location?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<StringFieldUpdateOperationsInput>;
  salary?: InputMaybe<StringFieldUpdateOperationsInput>;
  skills?: InputMaybe<ProfileUpdateskillsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProfileNestedInput>;
  years_of_exp?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpdateWithoutUserInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  education?: InputMaybe<ProfileUpdateeducationInput>;
  experience?: InputMaybe<ProfileUpdateexperienceInput>;
  handle?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipfs_hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  job_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<Scalars['JSON']>;
  mint?: InputMaybe<MintUpdateOneWithoutProfileNestedInput>;
  minted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  pref_location?: InputMaybe<StringFieldUpdateOperationsInput>;
  resume?: InputMaybe<StringFieldUpdateOperationsInput>;
  salary?: InputMaybe<StringFieldUpdateOperationsInput>;
  skills?: InputMaybe<ProfileUpdateskillsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  years_of_exp?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUpdateeducationInput = {
  push?: InputMaybe<Array<Scalars['JSON']>>;
  set?: InputMaybe<Array<Scalars['JSON']>>;
};

export type ProfileUpdateexperienceInput = {
  push?: InputMaybe<Array<Scalars['JSON']>>;
  set?: InputMaybe<Array<Scalars['JSON']>>;
};

export type ProfileUpdateskillsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ProfileUpsertWithoutMintInput = {
  create: ProfileCreateWithoutMintInput;
  update: ProfileUpdateWithoutMintInput;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  address?: InputMaybe<StringFilter>;
  education?: InputMaybe<JsonNullableListFilter>;
  experience?: InputMaybe<JsonNullableListFilter>;
  handle?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  ipfs_hash?: InputMaybe<StringFilter>;
  job_type?: InputMaybe<StringFilter>;
  link?: InputMaybe<JsonFilter>;
  mint?: InputMaybe<MintRelationFilter>;
  minted?: InputMaybe<BoolFilter>;
  pref_location?: InputMaybe<StringFilter>;
  resume?: InputMaybe<StringFilter>;
  salary?: InputMaybe<StringFilter>;
  skills?: InputMaybe<StringNullableListFilter>;
  summary?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
  years_of_exp?: InputMaybe<StringFilter>;
};

export type ProfileWhereUniqueInput = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  aggregateAccount: AggregateAccount;
  aggregateCredit: AggregateCredit;
  aggregateMint: AggregateMint;
  aggregateProfile: AggregateProfile;
  aggregateReferral: AggregateReferral;
  aggregateSession: AggregateSession;
  aggregateUser: AggregateUser;
  aggregateVerificationToken: AggregateVerificationToken;
  credit?: Maybe<Credit>;
  credits: Array<Credit>;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstCredit?: Maybe<Credit>;
  findFirstCreditOrThrow?: Maybe<Credit>;
  findFirstMint?: Maybe<Mint>;
  findFirstMintOrThrow?: Maybe<Mint>;
  findFirstProfile?: Maybe<Profile>;
  findFirstProfileOrThrow?: Maybe<Profile>;
  findFirstReferral?: Maybe<Referral>;
  findFirstReferralOrThrow?: Maybe<Referral>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  getAccount?: Maybe<Account>;
  getCredit?: Maybe<Credit>;
  getMint?: Maybe<Mint>;
  getProfile?: Maybe<Profile>;
  getReferral?: Maybe<Referral>;
  getSession?: Maybe<Session>;
  getUser?: Maybe<User>;
  getVerificationToken?: Maybe<VerificationToken>;
  groupByAccount: Array<AccountGroupBy>;
  groupByCredit: Array<CreditGroupBy>;
  groupByMint: Array<MintGroupBy>;
  groupByProfile: Array<ProfileGroupBy>;
  groupByReferral: Array<ReferralGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  referral?: Maybe<Referral>;
  referrals: Array<Referral>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  user?: Maybe<User>;
  users: Array<User>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateCreditArgs = {
  cursor?: InputMaybe<CreditWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CreditOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditWhereInput>;
};


export type QueryAggregateMintArgs = {
  cursor?: InputMaybe<MintWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MintOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MintWhereInput>;
};


export type QueryAggregateProfileArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryAggregateReferralArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryCreditArgs = {
  where: CreditWhereUniqueInput;
};


export type QueryCreditsArgs = {
  cursor?: InputMaybe<CreditWhereUniqueInput>;
  distinct?: InputMaybe<Array<CreditScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CreditOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstCreditArgs = {
  cursor?: InputMaybe<CreditWhereUniqueInput>;
  distinct?: InputMaybe<Array<CreditScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CreditOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditWhereInput>;
};


export type QueryFindFirstCreditOrThrowArgs = {
  cursor?: InputMaybe<CreditWhereUniqueInput>;
  distinct?: InputMaybe<Array<CreditScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CreditOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditWhereInput>;
};


export type QueryFindFirstMintArgs = {
  cursor?: InputMaybe<MintWhereUniqueInput>;
  distinct?: InputMaybe<Array<MintScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MintOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MintWhereInput>;
};


export type QueryFindFirstMintOrThrowArgs = {
  cursor?: InputMaybe<MintWhereUniqueInput>;
  distinct?: InputMaybe<Array<MintScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MintOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MintWhereInput>;
};


export type QueryFindFirstProfileArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryFindFirstProfileOrThrowArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryFindFirstReferralArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryFindFirstReferralOrThrowArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryGetAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryGetCreditArgs = {
  where: CreditWhereUniqueInput;
};


export type QueryGetMintArgs = {
  where: MintWhereUniqueInput;
};


export type QueryGetProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryGetReferralArgs = {
  where: ReferralWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupByCreditArgs = {
  by: Array<CreditScalarFieldEnum>;
  having?: InputMaybe<CreditScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CreditOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditWhereInput>;
};


export type QueryGroupByMintArgs = {
  by: Array<MintScalarFieldEnum>;
  having?: InputMaybe<MintScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MintOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MintWhereInput>;
};


export type QueryGroupByProfileArgs = {
  by: Array<ProfileScalarFieldEnum>;
  having?: InputMaybe<ProfileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProfileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryGroupByReferralArgs = {
  by: Array<ReferralScalarFieldEnum>;
  having?: InputMaybe<ReferralScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryMintArgs = {
  where: MintWhereUniqueInput;
};


export type QueryMintsArgs = {
  cursor?: InputMaybe<MintWhereUniqueInput>;
  distinct?: InputMaybe<Array<MintScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MintOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MintWhereInput>;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilesArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryReferralArgs = {
  where: ReferralWhereUniqueInput;
};


export type QueryReferralsArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Referral = {
  __typename?: 'Referral';
  email: Scalars['String'];
  id: Scalars['Int'];
  user: User;
  user_id: Scalars['String'];
};

export type ReferralAvgAggregate = {
  __typename?: 'ReferralAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ReferralAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ReferralCountAggregate = {
  __typename?: 'ReferralCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type ReferralCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ReferralCreateInput = {
  email: Scalars['String'];
  user: UserCreateNestedOneWithoutReferralsInput;
};

export type ReferralCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  user_id: Scalars['String'];
};

export type ReferralCreateManyUserInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
};

export type ReferralCreateManyUserInputEnvelope = {
  data: Array<ReferralCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReferralCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReferralCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReferralCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReferralCreateManyUserInputEnvelope>;
};

export type ReferralCreateOrConnectWithoutUserInput = {
  create: ReferralCreateWithoutUserInput;
  where: ReferralWhereUniqueInput;
};

export type ReferralCreateWithoutUserInput = {
  email: Scalars['String'];
};

export type ReferralGroupBy = {
  __typename?: 'ReferralGroupBy';
  _avg?: Maybe<ReferralAvgAggregate>;
  _count?: Maybe<ReferralCountAggregate>;
  _max?: Maybe<ReferralMaxAggregate>;
  _min?: Maybe<ReferralMinAggregate>;
  _sum?: Maybe<ReferralSumAggregate>;
  email: Scalars['String'];
  id: Scalars['Int'];
  user_id: Scalars['String'];
};

export type ReferralListRelationFilter = {
  every?: InputMaybe<ReferralWhereInput>;
  none?: InputMaybe<ReferralWhereInput>;
  some?: InputMaybe<ReferralWhereInput>;
};

export type ReferralMaxAggregate = {
  __typename?: 'ReferralMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type ReferralMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ReferralMinAggregate = {
  __typename?: 'ReferralMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

export type ReferralMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ReferralOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReferralOrderByWithAggregationInput = {
  _avg?: InputMaybe<ReferralAvgOrderByAggregateInput>;
  _count?: InputMaybe<ReferralCountOrderByAggregateInput>;
  _max?: InputMaybe<ReferralMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReferralMinOrderByAggregateInput>;
  _sum?: InputMaybe<ReferralSumOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ReferralOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum ReferralScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  UserId = 'user_id'
}

export type ReferralScalarWhereInput = {
  AND?: InputMaybe<Array<ReferralScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReferralScalarWhereInput>>;
  OR?: InputMaybe<Array<ReferralScalarWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type ReferralScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReferralScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReferralScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReferralScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type ReferralSumAggregate = {
  __typename?: 'ReferralSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ReferralSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ReferralUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReferralsNestedInput>;
};

export type ReferralUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ReferralUpdateManyWithWhereWithoutUserInput = {
  data: ReferralUpdateManyMutationInput;
  where: ReferralScalarWhereInput;
};

export type ReferralUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReferralCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReferralCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReferralCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReferralScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  set?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  update?: InputMaybe<Array<ReferralUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReferralUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReferralUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReferralUpdateWithWhereUniqueWithoutUserInput = {
  data: ReferralUpdateWithoutUserInput;
  where: ReferralWhereUniqueInput;
};

export type ReferralUpdateWithoutUserInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ReferralUpsertWithWhereUniqueWithoutUserInput = {
  create: ReferralCreateWithoutUserInput;
  update: ReferralUpdateWithoutUserInput;
  where: ReferralWhereUniqueInput;
};

export type ReferralWhereInput = {
  AND?: InputMaybe<Array<ReferralWhereInput>>;
  NOT?: InputMaybe<Array<ReferralWhereInput>>;
  OR?: InputMaybe<Array<ReferralWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type ReferralWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SessionCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  mints: Array<Mint>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  referrals: Array<Referral>;
  sessions: Array<Session>;
  updated_at: Scalars['DateTime'];
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserMintsArgs = {
  cursor?: InputMaybe<MintWhereUniqueInput>;
  distinct?: InputMaybe<Array<MintScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MintOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MintWhereInput>;
};


export type UserReferralsArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int'];
  mints: Scalars['Int'];
  referrals: Scalars['Int'];
  sessions: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  is_admin: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_admin?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  mints?: InputMaybe<MintCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutMintsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMintsInput>;
  create?: InputMaybe<UserCreateWithoutMintsInput>;
};

export type UserCreateNestedOneWithoutProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserCreateWithoutProfileInput>;
};

export type UserCreateNestedOneWithoutReferralsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReferralsInput>;
  create?: InputMaybe<UserCreateWithoutReferralsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMintsInput = {
  create: UserCreateWithoutMintsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReferralsInput = {
  create: UserCreateWithoutReferralsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  mints?: InputMaybe<MintCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutMintsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProfileInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  mints?: InputMaybe<MintCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutReferralsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  mints?: InputMaybe<MintCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  mints?: InputMaybe<MintCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_admin?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_admin?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_admin?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  is_admin?: InputMaybe<SortOrder>;
  mints?: InputMaybe<MintOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  referrals?: InputMaybe<ReferralOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'created_at',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  IsAdmin = 'is_admin',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  is_admin?: InputMaybe<BoolNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_admin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  mints?: InputMaybe<MintUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_admin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutMintsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMintsInput>;
  create?: InputMaybe<UserCreateWithoutMintsInput>;
  update?: InputMaybe<UserUpdateWithoutMintsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMintsInput>;
};

export type UserUpdateOneRequiredWithoutProfileNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserCreateWithoutProfileInput>;
  update?: InputMaybe<UserUpdateWithoutProfileInput>;
  upsert?: InputMaybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateOneRequiredWithoutReferralsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReferralsInput>;
  create?: InputMaybe<UserCreateWithoutReferralsInput>;
  update?: InputMaybe<UserUpdateWithoutReferralsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReferralsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateWithoutAccountsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_admin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  mints?: InputMaybe<MintUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMintsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_admin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProfileInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_admin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  mints?: InputMaybe<MintUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReferralsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_admin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  mints?: InputMaybe<MintUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_admin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  mints?: InputMaybe<MintUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
};

export type UserUpsertWithoutMintsInput = {
  create: UserCreateWithoutMintsInput;
  update: UserUpdateWithoutMintsInput;
};

export type UserUpsertWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  update: UserUpdateWithoutProfileInput;
};

export type UserUpsertWithoutReferralsInput = {
  create: UserCreateWithoutReferralsInput;
  update: UserUpdateWithoutReferralsInput;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  is_admin?: InputMaybe<BoolNullableFilter>;
  mints?: InputMaybe<MintListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileRelationFilter>;
  referrals?: InputMaybe<ReferralListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  identifier: Scalars['Int'];
  token: Scalars['Int'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<Scalars['String']>;
};

export type CreateOneReferralMutationVariables = Exact<{
  email: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type CreateOneReferralMutation = { __typename?: 'Mutation', createOneReferral: { __typename?: 'Referral', id: number } };

export type CreateProfileMutationMutationVariables = Exact<{
  handle: Scalars['String'];
  title: Scalars['String'];
  summary: Scalars['String'];
  job_type: Scalars['String'];
  pref_location: Scalars['String'];
  salary: Scalars['String'];
  years_of_exp: Scalars['String'];
  link: Scalars['JSON'];
  address: Scalars['String'];
  education: Array<Scalars['JSON']> | Scalars['JSON'];
  experience: Array<Scalars['JSON']> | Scalars['JSON'];
  ipfs_hash: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type CreateProfileMutationMutation = { __typename?: 'Mutation', createOneProfile: { __typename?: 'Profile', id: number, handle: string } };

export type UpdateProfileMintingMutationMutationVariables = Exact<{
  user_id: Scalars['String'];
  minted: Scalars['Boolean'];
}>;


export type UpdateProfileMintingMutationMutation = { __typename?: 'Mutation', updateOneProfile?: { __typename?: 'Profile', id: number, user: { __typename?: 'User', email?: string | null } } | null };

export type GetProfileByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type GetProfileByHandleQuery = { __typename?: 'Query', getProfile?: { __typename?: 'Profile', id: number, handle: string, title: string, summary: string, job_type: string, pref_location: string, salary: string, years_of_exp: string, skills: Array<string>, experience: Array<any>, education: Array<any>, address: string, minted: boolean, ipfs_hash: string } | null };

export type GetProfileByIdQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetProfileByIdQuery = { __typename?: 'Query', getProfile?: { __typename?: 'Profile', id: number, handle: string, title: string, summary: string, job_type: string, pref_location: string, salary: string, years_of_exp: string, skills: Array<string>, experience: Array<any>, education: Array<any>, address: string, link: any, minted: boolean, ipfs_hash: string, user_id: string } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', created_at: any, email?: string | null, emailVerified?: any | null, id: string, image?: string | null, is_admin?: boolean | null, name?: string | null, updated_at: any } | null };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserByEmailQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', created_at: any, email?: string | null, emailVerified?: any | null, id: string, is_admin?: boolean | null, name?: string | null, updated_at: any } | null };

export type GetProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilesQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', address: string, education: Array<any>, experience: Array<any>, handle: string, id: number, job_type: string, link: any, minted: boolean, pref_location: string, salary: string, skills: Array<string>, summary: string, title: string, ipfs_hash: string, user_id: string, years_of_exp: string, user: { __typename?: 'User', image?: string | null } }> };

export type GetMintedProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMintedProfilesQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', address: string, education: Array<any>, experience: Array<any>, handle: string, id: number, job_type: string, link: any, minted: boolean, pref_location: string, salary: string, skills: Array<string>, summary: string, title: string, ipfs_hash: string, user_id: string, years_of_exp: string, user: { __typename?: 'User', image?: string | null } }> };

export type GetReferralCountQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetReferralCountQuery = { __typename?: 'Query', aggregateReferral: { __typename?: 'AggregateReferral', _count?: { __typename?: 'ReferralCountAggregate', user_id: number } | null } };


export const CreateOneReferralDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOneReferral"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneReferral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateOneReferralMutation, CreateOneReferralMutationVariables>;
export const CreateProfileMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProfileMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"job_type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pref_location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"salary"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"years_of_exp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"link"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"education"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experience"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ipfs_hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"job_type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"job_type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pref_location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pref_location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"salary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"salary"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"years_of_exp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"years_of_exp"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"link"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"education"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"education"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"experience"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experience"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"minted"},"value":{"kind":"BooleanValue","value":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"ipfs_hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ipfs_hash"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}}]}}]} as unknown as DocumentNode<CreateProfileMutationMutation, CreateProfileMutationMutationVariables>;
export const UpdateProfileMintingMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProfileMintingMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minted"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minted"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minted"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMintingMutationMutation, UpdateProfileMintingMutationMutationVariables>;
export const GetProfileByHandleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileByHandle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"job_type"}},{"kind":"Field","name":{"kind":"Name","value":"pref_location"}},{"kind":"Field","name":{"kind":"Name","value":"salary"}},{"kind":"Field","name":{"kind":"Name","value":"years_of_exp"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"minted"}},{"kind":"Field","name":{"kind":"Name","value":"ipfs_hash"}}]}}]}}]} as unknown as DocumentNode<GetProfileByHandleQuery, GetProfileByHandleQueryVariables>;
export const GetProfileByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"job_type"}},{"kind":"Field","name":{"kind":"Name","value":"pref_location"}},{"kind":"Field","name":{"kind":"Name","value":"salary"}},{"kind":"Field","name":{"kind":"Name","value":"years_of_exp"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"minted"}},{"kind":"Field","name":{"kind":"Name","value":"ipfs_hash"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<GetProfileByIdQuery, GetProfileByIdQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"is_admin"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_admin"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetUserByEmailQuery, GetUserByEmailQueryVariables>;
export const GetProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job_type"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"minted"}},{"kind":"Field","name":{"kind":"Name","value":"pref_location"}},{"kind":"Field","name":{"kind":"Name","value":"salary"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ipfs_hash"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"years_of_exp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GetProfilesQuery, GetProfilesQueryVariables>;
export const GetMintedProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMintedProfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minted"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job_type"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"minted"}},{"kind":"Field","name":{"kind":"Name","value":"pref_location"}},{"kind":"Field","name":{"kind":"Name","value":"salary"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ipfs_hash"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"years_of_exp"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GetMintedProfilesQuery, GetMintedProfilesQueryVariables>;
export const GetReferralCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReferralCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregateReferral"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetReferralCountQuery, GetReferralCountQueryVariables>;