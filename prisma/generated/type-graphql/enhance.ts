import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Account: crudResolvers.AccountCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  VerificationToken: crudResolvers.VerificationTokenCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Mint: crudResolvers.MintCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  Referral: crudResolvers.ReferralCrudResolver,
  Credit: crudResolvers.CreditCrudResolver
};
const actionResolversMap = {
  Account: {
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    createOneAccount: actionResolvers.CreateOneAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    account: actionResolvers.FindUniqueAccountResolver,
    getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    updateOneAccount: actionResolvers.UpdateOneAccountResolver,
    upsertOneAccount: actionResolvers.UpsertOneAccountResolver
  },
  Session: {
    aggregateSession: actionResolvers.AggregateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    createOneSession: actionResolvers.CreateOneSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    deleteOneSession: actionResolvers.DeleteOneSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
    sessions: actionResolvers.FindManySessionResolver,
    session: actionResolvers.FindUniqueSessionResolver,
    getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
    groupBySession: actionResolvers.GroupBySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    updateOneSession: actionResolvers.UpdateOneSessionResolver,
    upsertOneSession: actionResolvers.UpsertOneSessionResolver
  },
  VerificationToken: {
    aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
    createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
    createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
    deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
    deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
    findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
    findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
    verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
    verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
    getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
    groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
    updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
    updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
    upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Mint: {
    aggregateMint: actionResolvers.AggregateMintResolver,
    createManyMint: actionResolvers.CreateManyMintResolver,
    createOneMint: actionResolvers.CreateOneMintResolver,
    deleteManyMint: actionResolvers.DeleteManyMintResolver,
    deleteOneMint: actionResolvers.DeleteOneMintResolver,
    findFirstMint: actionResolvers.FindFirstMintResolver,
    findFirstMintOrThrow: actionResolvers.FindFirstMintOrThrowResolver,
    mints: actionResolvers.FindManyMintResolver,
    mint: actionResolvers.FindUniqueMintResolver,
    getMint: actionResolvers.FindUniqueMintOrThrowResolver,
    groupByMint: actionResolvers.GroupByMintResolver,
    updateManyMint: actionResolvers.UpdateManyMintResolver,
    updateOneMint: actionResolvers.UpdateOneMintResolver,
    upsertOneMint: actionResolvers.UpsertOneMintResolver
  },
  Profile: {
    aggregateProfile: actionResolvers.AggregateProfileResolver,
    createManyProfile: actionResolvers.CreateManyProfileResolver,
    createOneProfile: actionResolvers.CreateOneProfileResolver,
    deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
    deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
    findFirstProfile: actionResolvers.FindFirstProfileResolver,
    findFirstProfileOrThrow: actionResolvers.FindFirstProfileOrThrowResolver,
    profiles: actionResolvers.FindManyProfileResolver,
    profile: actionResolvers.FindUniqueProfileResolver,
    getProfile: actionResolvers.FindUniqueProfileOrThrowResolver,
    groupByProfile: actionResolvers.GroupByProfileResolver,
    updateManyProfile: actionResolvers.UpdateManyProfileResolver,
    updateOneProfile: actionResolvers.UpdateOneProfileResolver,
    upsertOneProfile: actionResolvers.UpsertOneProfileResolver
  },
  Referral: {
    aggregateReferral: actionResolvers.AggregateReferralResolver,
    createManyReferral: actionResolvers.CreateManyReferralResolver,
    createOneReferral: actionResolvers.CreateOneReferralResolver,
    deleteManyReferral: actionResolvers.DeleteManyReferralResolver,
    deleteOneReferral: actionResolvers.DeleteOneReferralResolver,
    findFirstReferral: actionResolvers.FindFirstReferralResolver,
    findFirstReferralOrThrow: actionResolvers.FindFirstReferralOrThrowResolver,
    referrals: actionResolvers.FindManyReferralResolver,
    referral: actionResolvers.FindUniqueReferralResolver,
    getReferral: actionResolvers.FindUniqueReferralOrThrowResolver,
    groupByReferral: actionResolvers.GroupByReferralResolver,
    updateManyReferral: actionResolvers.UpdateManyReferralResolver,
    updateOneReferral: actionResolvers.UpdateOneReferralResolver,
    upsertOneReferral: actionResolvers.UpsertOneReferralResolver
  },
  Credit: {
    aggregateCredit: actionResolvers.AggregateCreditResolver,
    createManyCredit: actionResolvers.CreateManyCreditResolver,
    createOneCredit: actionResolvers.CreateOneCreditResolver,
    deleteManyCredit: actionResolvers.DeleteManyCreditResolver,
    deleteOneCredit: actionResolvers.DeleteOneCreditResolver,
    findFirstCredit: actionResolvers.FindFirstCreditResolver,
    findFirstCreditOrThrow: actionResolvers.FindFirstCreditOrThrowResolver,
    credits: actionResolvers.FindManyCreditResolver,
    credit: actionResolvers.FindUniqueCreditResolver,
    getCredit: actionResolvers.FindUniqueCreditOrThrowResolver,
    groupByCredit: actionResolvers.GroupByCreditResolver,
    updateManyCredit: actionResolvers.UpdateManyCreditResolver,
    updateOneCredit: actionResolvers.UpdateOneCreditResolver,
    upsertOneCredit: actionResolvers.UpsertOneCreditResolver
  }
};
const crudResolversInfo = {
  Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
  Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
  VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Mint: ["aggregateMint", "createManyMint", "createOneMint", "deleteManyMint", "deleteOneMint", "findFirstMint", "findFirstMintOrThrow", "mints", "mint", "getMint", "groupByMint", "updateManyMint", "updateOneMint", "upsertOneMint"],
  Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "findFirstProfileOrThrow", "profiles", "profile", "getProfile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"],
  Referral: ["aggregateReferral", "createManyReferral", "createOneReferral", "deleteManyReferral", "deleteOneReferral", "findFirstReferral", "findFirstReferralOrThrow", "referrals", "referral", "getReferral", "groupByReferral", "updateManyReferral", "updateOneReferral", "upsertOneReferral"],
  Credit: ["aggregateCredit", "createManyCredit", "createOneCredit", "deleteManyCredit", "deleteOneCredit", "findFirstCredit", "findFirstCreditOrThrow", "credits", "credit", "getCredit", "groupByCredit", "updateManyCredit", "updateOneCredit", "upsertOneCredit"]
};
const argsInfo = {
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  CreateOneAccountArgs: ["data"],
  DeleteManyAccountArgs: ["where"],
  DeleteOneAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAccountArgs: ["where"],
  FindUniqueAccountOrThrowArgs: ["where"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAccountArgs: ["data", "where"],
  UpdateOneAccountArgs: ["data", "where"],
  UpsertOneAccountArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySessionArgs: ["data", "skipDuplicates"],
  CreateOneSessionArgs: ["data"],
  DeleteManySessionArgs: ["where"],
  DeleteOneSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSessionArgs: ["where"],
  FindUniqueSessionOrThrowArgs: ["where"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySessionArgs: ["data", "where"],
  UpdateOneSessionArgs: ["data", "where"],
  UpsertOneSessionArgs: ["where", "create", "update"],
  AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
  CreateOneVerificationTokenArgs: ["data"],
  DeleteManyVerificationTokenArgs: ["where"],
  DeleteOneVerificationTokenArgs: ["where"],
  FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVerificationTokenArgs: ["where"],
  FindUniqueVerificationTokenOrThrowArgs: ["where"],
  GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVerificationTokenArgs: ["data", "where"],
  UpdateOneVerificationTokenArgs: ["data", "where"],
  UpsertOneVerificationTokenArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateMintArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMintArgs: ["data", "skipDuplicates"],
  CreateOneMintArgs: ["data"],
  DeleteManyMintArgs: ["where"],
  DeleteOneMintArgs: ["where"],
  FindFirstMintArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMintOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMintArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMintArgs: ["where"],
  FindUniqueMintOrThrowArgs: ["where"],
  GroupByMintArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMintArgs: ["data", "where"],
  UpdateOneMintArgs: ["data", "where"],
  UpsertOneMintArgs: ["where", "create", "update"],
  AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProfileArgs: ["data", "skipDuplicates"],
  CreateOneProfileArgs: ["data"],
  DeleteManyProfileArgs: ["where"],
  DeleteOneProfileArgs: ["where"],
  FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProfileOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProfileArgs: ["where"],
  FindUniqueProfileOrThrowArgs: ["where"],
  GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProfileArgs: ["data", "where"],
  UpdateOneProfileArgs: ["data", "where"],
  UpsertOneProfileArgs: ["where", "create", "update"],
  AggregateReferralArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyReferralArgs: ["data", "skipDuplicates"],
  CreateOneReferralArgs: ["data"],
  DeleteManyReferralArgs: ["where"],
  DeleteOneReferralArgs: ["where"],
  FindFirstReferralArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstReferralOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReferralArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueReferralArgs: ["where"],
  FindUniqueReferralOrThrowArgs: ["where"],
  GroupByReferralArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyReferralArgs: ["data", "where"],
  UpdateOneReferralArgs: ["data", "where"],
  UpsertOneReferralArgs: ["where", "create", "update"],
  AggregateCreditArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCreditArgs: ["data", "skipDuplicates"],
  CreateOneCreditArgs: ["data"],
  DeleteManyCreditArgs: ["where"],
  DeleteOneCreditArgs: ["where"],
  FindFirstCreditArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCreditOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCreditArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCreditArgs: ["where"],
  FindUniqueCreditOrThrowArgs: ["where"],
  GroupByCreditArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCreditArgs: ["data", "where"],
  UpdateOneCreditArgs: ["data", "where"],
  UpsertOneCreditArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Account: relationResolvers.AccountRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Mint: relationResolvers.MintRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver,
  Referral: relationResolvers.ReferralRelationsResolver
};
const relationResolversInfo = {
  Account: ["user"],
  Session: ["user"],
  User: ["accounts", "mints", "profile", "referrals", "sessions"],
  Mint: ["user", "profile"],
  Profile: ["mint", "user"],
  Referral: ["user"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  Session: ["id", "sessionToken", "userId", "expires"],
  VerificationToken: ["identifier", "token", "expires"],
  User: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  Mint: ["id", "profile_id", "approved", "reviewed_by"],
  Profile: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume"],
  Referral: ["id", "email", "user_id"],
  Credit: ["id", "orefid", "profile_id"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_min", "_max"],
  SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
  AggregateVerificationToken: ["_count", "_min", "_max"],
  VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "_count", "_min", "_max"],
  AggregateMint: ["_count", "_avg", "_sum", "_min", "_max"],
  MintGroupBy: ["id", "profile_id", "approved", "reviewed_by", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfileGroupBy: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateReferral: ["_count", "_avg", "_sum", "_min", "_max"],
  ReferralGroupBy: ["id", "email", "user_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCredit: ["_count", "_avg", "_sum", "_min", "_max"],
  CreditGroupBy: ["id", "orefid", "profile_id", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
  AccountAvgAggregate: ["expires_at"],
  AccountSumAggregate: ["expires_at"],
  AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
  SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
  SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
  VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
  VerificationTokenMinAggregate: ["identifier", "token", "expires"],
  VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
  UserCount: ["accounts", "mints", "referrals", "sessions"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  MintCountAggregate: ["id", "profile_id", "approved", "reviewed_by", "_all"],
  MintAvgAggregate: ["id", "profile_id"],
  MintSumAggregate: ["id", "profile_id"],
  MintMinAggregate: ["id", "profile_id", "approved", "reviewed_by"],
  MintMaxAggregate: ["id", "profile_id", "approved", "reviewed_by"],
  ProfileCountAggregate: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume", "_all"],
  ProfileAvgAggregate: ["id"],
  ProfileSumAggregate: ["id"],
  ProfileMinAggregate: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id", "ipfs_hash", "resume"],
  ProfileMaxAggregate: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id", "ipfs_hash", "resume"],
  ReferralCountAggregate: ["id", "email", "user_id", "_all"],
  ReferralAvgAggregate: ["id"],
  ReferralSumAggregate: ["id"],
  ReferralMinAggregate: ["id", "email", "user_id"],
  ReferralMaxAggregate: ["id", "email", "user_id"],
  CreditCountAggregate: ["id", "orefid", "profile_id", "_all"],
  CreditAvgAggregate: ["id"],
  CreditSumAggregate: ["id"],
  CreditMinAggregate: ["id", "orefid", "profile_id"],
  CreditMaxAggregate: ["id", "orefid", "profile_id"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
  AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
  SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
  SessionWhereUniqueInput: ["id", "sessionToken"],
  SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
  VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
  VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
  VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "referrals", "sessions"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "referrals", "sessions"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  MintWhereInput: ["AND", "OR", "NOT", "id", "profile_id", "approved", "reviewed_by", "user", "profile"],
  MintOrderByWithRelationInput: ["id", "profile_id", "approved", "reviewed_by", "user", "profile"],
  MintWhereUniqueInput: ["id", "profile_id"],
  MintOrderByWithAggregationInput: ["id", "profile_id", "approved", "reviewed_by", "_count", "_avg", "_max", "_min", "_sum"],
  MintScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "profile_id", "approved", "reviewed_by"],
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume", "mint", "user"],
  ProfileOrderByWithRelationInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume", "mint", "user"],
  ProfileWhereUniqueInput: ["id", "handle", "user_id"],
  ProfileOrderByWithAggregationInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume", "_count", "_avg", "_max", "_min", "_sum"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume"],
  ReferralWhereInput: ["AND", "OR", "NOT", "id", "email", "user_id", "user"],
  ReferralOrderByWithRelationInput: ["id", "email", "user_id", "user"],
  ReferralWhereUniqueInput: ["id", "email"],
  ReferralOrderByWithAggregationInput: ["id", "email", "user_id", "_count", "_avg", "_max", "_min", "_sum"],
  ReferralScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "user_id"],
  CreditWhereInput: ["AND", "OR", "NOT", "id", "orefid", "profile_id"],
  CreditOrderByWithRelationInput: ["id", "orefid", "profile_id"],
  CreditWhereUniqueInput: ["id"],
  CreditOrderByWithAggregationInput: ["id", "orefid", "profile_id", "_count", "_avg", "_max", "_min", "_sum"],
  CreditScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "orefid", "profile_id"],
  AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateInput: ["id", "sessionToken", "expires", "user"],
  SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
  SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
  SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
  VerificationTokenCreateInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateInput: ["identifier", "token", "expires"],
  VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "referrals", "sessions"],
  UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "referrals", "sessions"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  MintCreateInput: ["approved", "user", "profile"],
  MintUpdateInput: ["approved", "user", "profile"],
  MintCreateManyInput: ["id", "profile_id", "approved", "reviewed_by"],
  MintUpdateManyMutationInput: ["approved"],
  ProfileCreateInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "ipfs_hash", "resume", "mint", "user"],
  ProfileUpdateInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "ipfs_hash", "resume", "mint", "user"],
  ProfileCreateManyInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume"],
  ProfileUpdateManyMutationInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "ipfs_hash", "resume"],
  ReferralCreateInput: ["email", "user"],
  ReferralUpdateInput: ["email", "user"],
  ReferralCreateManyInput: ["id", "email", "user_id"],
  ReferralUpdateManyMutationInput: ["email"],
  CreditCreateInput: ["orefid", "profile_id"],
  CreditUpdateInput: ["orefid", "profile_id"],
  CreditCreateManyInput: ["id", "orefid", "profile_id"],
  CreditUpdateManyMutationInput: ["orefid", "profile_id"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
  AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountAvgOrderByAggregateInput: ["expires_at"],
  AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountSumOrderByAggregateInput: ["expires_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
  VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolNullableFilter: ["equals", "not"],
  AccountListRelationFilter: ["every", "some", "none"],
  MintListRelationFilter: ["every", "some", "none"],
  ProfileRelationFilter: ["is", "isNot"],
  ReferralListRelationFilter: ["every", "some", "none"],
  SessionListRelationFilter: ["every", "some", "none"],
  AccountOrderByRelationAggregateInput: ["_count"],
  MintOrderByRelationAggregateInput: ["_count"],
  ReferralOrderByRelationAggregateInput: ["_count"],
  SessionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  MintCountOrderByAggregateInput: ["id", "profile_id", "approved", "reviewed_by"],
  MintAvgOrderByAggregateInput: ["id", "profile_id"],
  MintMaxOrderByAggregateInput: ["id", "profile_id", "approved", "reviewed_by"],
  MintMinOrderByAggregateInput: ["id", "profile_id", "approved", "reviewed_by"],
  MintSumOrderByAggregateInput: ["id", "profile_id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  JsonNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  MintRelationFilter: ["is", "isNot"],
  ProfileCountOrderByAggregateInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "ipfs_hash", "resume"],
  ProfileAvgOrderByAggregateInput: ["id"],
  ProfileMaxOrderByAggregateInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id", "ipfs_hash", "resume"],
  ProfileMinOrderByAggregateInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id", "ipfs_hash", "resume"],
  ProfileSumOrderByAggregateInput: ["id"],
  ReferralCountOrderByAggregateInput: ["id", "email", "user_id"],
  ReferralAvgOrderByAggregateInput: ["id"],
  ReferralMaxOrderByAggregateInput: ["id", "email", "user_id"],
  ReferralMinOrderByAggregateInput: ["id", "email", "user_id"],
  ReferralSumOrderByAggregateInput: ["id"],
  CreditCountOrderByAggregateInput: ["id", "orefid", "profile_id"],
  CreditAvgOrderByAggregateInput: ["id"],
  CreditMaxOrderByAggregateInput: ["id", "orefid", "profile_id"],
  CreditMinOrderByAggregateInput: ["id", "orefid", "profile_id"],
  CreditSumOrderByAggregateInput: ["id"],
  UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  MintCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  ReferralCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MintUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ReferralUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutMintsInput: ["create", "connectOrCreate", "connect"],
  ProfileCreateNestedOneWithoutMintInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutMintsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProfileUpdateOneRequiredWithoutMintNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProfileCreatelinkInput: ["set"],
  ProfileCreateskillsInput: ["set"],
  ProfileCreateeducationInput: ["set"],
  ProfileCreateexperienceInput: ["set"],
  MintCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  ProfileUpdatelinkInput: ["set", "push"],
  ProfileUpdateskillsInput: ["set", "push"],
  ProfileUpdateeducationInput: ["set", "push"],
  ProfileUpdateexperienceInput: ["set", "push"],
  MintUpdateOneWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneRequiredWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutReferralsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutReferralsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "mints", "profile", "referrals", "sessions"],
  UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
  UserUpsertWithoutAccountsInput: ["update", "create"],
  UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "mints", "profile", "referrals", "sessions"],
  UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "referrals"],
  UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
  UserUpsertWithoutSessionsInput: ["update", "create"],
  UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "referrals"],
  AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountCreateOrConnectWithoutUserInput: ["where", "create"],
  AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MintCreateWithoutUserInput: ["approved", "profile"],
  MintCreateOrConnectWithoutUserInput: ["where", "create"],
  MintCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProfileCreateWithoutUserInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "ipfs_hash", "resume", "mint"],
  ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  ReferralCreateWithoutUserInput: ["email"],
  ReferralCreateOrConnectWithoutUserInput: ["where", "create"],
  ReferralCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
  SessionCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  MintUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MintUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MintUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MintScalarWhereInput: ["AND", "OR", "NOT", "id", "profile_id", "approved", "reviewed_by"],
  ProfileUpsertWithoutUserInput: ["update", "create"],
  ProfileUpdateWithoutUserInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "ipfs_hash", "resume", "mint"],
  ReferralUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ReferralUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ReferralUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ReferralScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "user_id"],
  SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  UserCreateWithoutMintsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "profile", "referrals", "sessions"],
  UserCreateOrConnectWithoutMintsInput: ["where", "create"],
  ProfileCreateWithoutMintInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "ipfs_hash", "resume", "user"],
  ProfileCreateOrConnectWithoutMintInput: ["where", "create"],
  UserUpsertWithoutMintsInput: ["update", "create"],
  UserUpdateWithoutMintsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "profile", "referrals", "sessions"],
  ProfileUpsertWithoutMintInput: ["update", "create"],
  ProfileUpdateWithoutMintInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "ipfs_hash", "resume", "user"],
  MintCreateWithoutProfileInput: ["approved", "user"],
  MintCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserCreateWithoutProfileInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "referrals", "sessions"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  MintUpsertWithoutProfileInput: ["update", "create"],
  MintUpdateWithoutProfileInput: ["approved", "user"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "referrals", "sessions"],
  UserCreateWithoutReferralsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "sessions"],
  UserCreateOrConnectWithoutReferralsInput: ["where", "create"],
  UserUpsertWithoutReferralsInput: ["update", "create"],
  UserUpdateWithoutReferralsInput: ["id", "name", "email", "emailVerified", "image", "created_at", "updated_at", "is_admin", "accounts", "mints", "profile", "sessions"],
  AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  MintCreateManyUserInput: ["id", "profile_id", "approved"],
  ReferralCreateManyUserInput: ["id", "email"],
  SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
  AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  MintUpdateWithoutUserInput: ["approved", "profile"],
  ReferralUpdateWithoutUserInput: ["email"],
  SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

