import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CreditWhereInput", {
  isAbstract: true
})
export class CreditWhereInput {
  @TypeGraphQL.Field(_type => [CreditWhereInput], {
    nullable: true
  })
  AND?: CreditWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditWhereInput], {
    nullable: true
  })
  OR?: CreditWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditWhereInput], {
    nullable: true
  })
  NOT?: CreditWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orefid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  profile_id?: StringFilter | undefined;
}
