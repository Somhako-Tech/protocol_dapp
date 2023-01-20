import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReferralWhereInput", {
  isAbstract: true
})
export class ReferralWhereInput {
  @TypeGraphQL.Field(_type => [ReferralWhereInput], {
    nullable: true
  })
  AND?: ReferralWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralWhereInput], {
    nullable: true
  })
  OR?: ReferralWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralWhereInput], {
    nullable: true
  })
  NOT?: ReferralWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
