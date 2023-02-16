import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileOrderByWithAggregationInput } from "../../../inputs/ProfileOrderByWithAggregationInput";
import { ProfileScalarWhereWithAggregatesInput } from "../../../inputs/ProfileScalarWhereWithAggregatesInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
import { ProfileScalarFieldEnum } from "../../../../enums/ProfileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereInput, {
    nullable: true
  })
  where?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfileOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProfileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "handle" | "title" | "summary" | "job_type" | "pref_location" | "salary" | "years_of_exp" | "link" | "address" | "skills" | "education" | "experience" | "minted" | "user_id" | "ipfs_hash">;

  @TypeGraphQL.Field(_type => ProfileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProfileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
