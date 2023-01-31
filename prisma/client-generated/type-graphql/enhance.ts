import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Profile: crudResolvers.ProfileCrudResolver
};
const actionResolversMap = {
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
  }
};
const crudResolversInfo = {
  Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "findFirstProfileOrThrow", "profiles", "profile", "getProfile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"]
};
const argsInfo = {
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
  UpsertOneProfileArgs: ["where", "create", "update"]
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
  Profile: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted"]
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
  AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfileGroupBy: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProfileCountAggregate: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "_all"],
  ProfileAvgAggregate: ["id"],
  ProfileSumAggregate: ["id"],
  ProfileMinAggregate: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id"],
  ProfileMaxAggregate: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id"]
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
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  ProfileOrderByWithRelationInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  ProfileWhereUniqueInput: ["id", "handle"],
  ProfileOrderByWithAggregationInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id", "_count", "_avg", "_max", "_min", "_sum"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  ProfileCreateInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  ProfileUpdateInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  ProfileCreateManyInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  ProfileUpdateManyMutationInput: ["handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  JsonNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  BoolFilter: ["equals", "not"],
  ProfileCountOrderByAggregateInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "link", "address", "skills", "education", "experience", "minted", "user_id"],
  ProfileAvgOrderByAggregateInput: ["id"],
  ProfileMaxOrderByAggregateInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id"],
  ProfileMinOrderByAggregateInput: ["id", "handle", "title", "summary", "job_type", "pref_location", "salary", "years_of_exp", "address", "minted", "user_id"],
  ProfileSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ProfileCreateskillsInput: ["set"],
  ProfileCreateeducationInput: ["set"],
  ProfileCreateexperienceInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  ProfileUpdateskillsInput: ["set", "push"],
  ProfileUpdateeducationInput: ["set", "push"],
  ProfileUpdateexperienceInput: ["set", "push"],
  BoolFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"]
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

