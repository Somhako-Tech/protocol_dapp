import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateOrConnectWithoutProfileInput } from "../inputs/MintCreateOrConnectWithoutProfileInput";
import { MintCreateWithoutProfileInput } from "../inputs/MintCreateWithoutProfileInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintCreateNestedOneWithoutProfileInput", {
  isAbstract: true
})
export class MintCreateNestedOneWithoutProfileInput {
  @TypeGraphQL.Field(_type => MintCreateWithoutProfileInput, {
    nullable: true
  })
  create?: MintCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => MintCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: MintCreateOrConnectWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: true
  })
  connect?: MintWhereUniqueInput | undefined;
}
