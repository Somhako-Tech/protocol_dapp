import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReferralScalarWhereInput", {
  isAbstract: true
})
export class ReferralScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReferralScalarWhereInput], {
    nullable: true
  })
  AND?: ReferralScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralScalarWhereInput], {
    nullable: true
  })
  OR?: ReferralScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralScalarWhereInput], {
    nullable: true
  })
  NOT?: ReferralScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;
}
