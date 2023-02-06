import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditCreateInput } from "../../../inputs/CreditCreateInput";
import { CreditUpdateInput } from "../../../inputs/CreditUpdateInput";
import { CreditWhereUniqueInput } from "../../../inputs/CreditWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCreditArgs {
  @TypeGraphQL.Field(_type => CreditWhereUniqueInput, {
    nullable: false
  })
  where!: CreditWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreditCreateInput, {
    nullable: false
  })
  create!: CreditCreateInput;

  @TypeGraphQL.Field(_type => CreditUpdateInput, {
    nullable: false
  })
  update!: CreditUpdateInput;
}
