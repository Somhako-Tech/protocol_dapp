import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReferralScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReferralScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReferralScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReferralScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReferralScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReferralScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_id?: StringWithAggregatesFilter | undefined;
}
