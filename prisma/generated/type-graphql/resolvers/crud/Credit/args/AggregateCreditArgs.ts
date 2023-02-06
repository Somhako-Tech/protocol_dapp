import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditOrderByWithRelationInput } from "../../../inputs/CreditOrderByWithRelationInput";
import { CreditWhereInput } from "../../../inputs/CreditWhereInput";
import { CreditWhereUniqueInput } from "../../../inputs/CreditWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCreditArgs {
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
}
