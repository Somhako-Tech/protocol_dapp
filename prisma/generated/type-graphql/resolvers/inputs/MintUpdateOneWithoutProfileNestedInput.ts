import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateOrConnectWithoutProfileInput } from "../inputs/MintCreateOrConnectWithoutProfileInput";
import { MintCreateWithoutProfileInput } from "../inputs/MintCreateWithoutProfileInput";
import { MintUpdateWithoutProfileInput } from "../inputs/MintUpdateWithoutProfileInput";
import { MintUpsertWithoutProfileInput } from "../inputs/MintUpsertWithoutProfileInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintUpdateOneWithoutProfileNestedInput", {
  isAbstract: true
})
export class MintUpdateOneWithoutProfileNestedInput {
  @TypeGraphQL.Field(_type => MintCreateWithoutProfileInput, {
    nullable: true
  })
  create?: MintCreateWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => MintCreateOrConnectWithoutProfileInput, {
    nullable: true
  })
  connectOrCreate?: MintCreateOrConnectWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => MintUpsertWithoutProfileInput, {
    nullable: true
  })
  upsert?: MintUpsertWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: true
  })
  connect?: MintWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MintUpdateWithoutProfileInput, {
    nullable: true
  })
  update?: MintUpdateWithoutProfileInput | undefined;
}
