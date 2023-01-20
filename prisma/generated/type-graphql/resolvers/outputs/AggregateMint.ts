import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintAvgAggregate } from "../outputs/MintAvgAggregate";
import { MintCountAggregate } from "../outputs/MintCountAggregate";
import { MintMaxAggregate } from "../outputs/MintMaxAggregate";
import { MintMinAggregate } from "../outputs/MintMinAggregate";
import { MintSumAggregate } from "../outputs/MintSumAggregate";

@TypeGraphQL.ObjectType("AggregateMint", {
  isAbstract: true
})
export class AggregateMint {
  @TypeGraphQL.Field(_type => MintCountAggregate, {
    nullable: true
  })
  _count!: MintCountAggregate | null;

  @TypeGraphQL.Field(_type => MintAvgAggregate, {
    nullable: true
  })
  _avg!: MintAvgAggregate | null;

  @TypeGraphQL.Field(_type => MintSumAggregate, {
    nullable: true
  })
  _sum!: MintSumAggregate | null;

  @TypeGraphQL.Field(_type => MintMinAggregate, {
    nullable: true
  })
  _min!: MintMinAggregate | null;

  @TypeGraphQL.Field(_type => MintMaxAggregate, {
    nullable: true
  })
  _max!: MintMaxAggregate | null;
}
