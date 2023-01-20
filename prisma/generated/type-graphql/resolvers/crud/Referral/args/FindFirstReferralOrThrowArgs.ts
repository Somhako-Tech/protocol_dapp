import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferralOrderByWithRelationInput } from "../../../inputs/ReferralOrderByWithRelationInput";
import { ReferralWhereInput } from "../../../inputs/ReferralWhereInput";
import { ReferralWhereUniqueInput } from "../../../inputs/ReferralWhereUniqueInput";
import { ReferralScalarFieldEnum } from "../../../../enums/ReferralScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstReferralOrThrowArgs {
  @TypeGraphQL.Field(_type => ReferralWhereInput, {
    nullable: true
  })
  where?: ReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReferralOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReferralOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReferralWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReferralWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReferralScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "user_id"> | undefined;
}
