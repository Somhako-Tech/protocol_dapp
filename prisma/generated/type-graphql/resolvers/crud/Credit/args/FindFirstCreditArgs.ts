import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditOrderByWithRelationInput } from "../../../inputs/CreditOrderByWithRelationInput";
import { CreditWhereInput } from "../../../inputs/CreditWhereInput";
import { CreditWhereUniqueInput } from "../../../inputs/CreditWhereUniqueInput";
import { CreditScalarFieldEnum } from "../../../../enums/CreditScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCreditArgs {
  @TypeGraphQL.Field(_type => CreditWhereInput, {
    nullable: true
  })
  where?: CreditWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreditOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CreditOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CreditWhereUniqueInput, {
    nullable: true
  })
  cursor?: CreditWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CreditScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "orefid" | "profile_id"> | undefined;
}
