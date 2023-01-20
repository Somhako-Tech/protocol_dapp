import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintOrderByWithAggregationInput } from "../../../inputs/MintOrderByWithAggregationInput";
import { MintScalarWhereWithAggregatesInput } from "../../../inputs/MintScalarWhereWithAggregatesInput";
import { MintWhereInput } from "../../../inputs/MintWhereInput";
import { MintScalarFieldEnum } from "../../../../enums/MintScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMintArgs {
  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  where?: MintWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MintOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MintOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "profile_id" | "approved" | "reviewed_by">;

  @TypeGraphQL.Field(_type => MintScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MintScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
