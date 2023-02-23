import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileAvgOrderByAggregateInput } from "../inputs/ProfileAvgOrderByAggregateInput";
import { ProfileCountOrderByAggregateInput } from "../inputs/ProfileCountOrderByAggregateInput";
import { ProfileMaxOrderByAggregateInput } from "../inputs/ProfileMaxOrderByAggregateInput";
import { ProfileMinOrderByAggregateInput } from "../inputs/ProfileMinOrderByAggregateInput";
import { ProfileSumOrderByAggregateInput } from "../inputs/ProfileSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfileOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProfileOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  handle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  summary?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  job_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pref_location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  salary?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  years_of_exp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  skills?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  experience?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  minted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ipfs_hash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resume?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProfileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfileAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProfileAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProfileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProfileMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfileSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProfileSumOrderByAggregateInput | undefined;
}
