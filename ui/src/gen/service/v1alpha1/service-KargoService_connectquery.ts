// @generated by protoc-gen-connect-query v0.2.1 with parameter "target=ts"
// @generated from file service/v1alpha1/service.proto (package akuity.io.kargo.service.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { GetEnvironmentRequest, GetEnvironmentResponse, ListEnvironmentsRequest, ListEnvironmentsResponse, PromoteEnvironmentRequest, PromoteEnvironmentResponse } from "./service_pb.js";

export const typeName = "akuity.io.kargo.service.v1alpha1.KargoService";

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.ListEnvironments
 */
export const listEnvironments = createQueryService({
  service: {
    methods: {
      listEnvironments: {
        name: "ListEnvironments",
        kind: MethodKind.Unary,
        I: ListEnvironmentsRequest,
        O: ListEnvironmentsResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).listEnvironments;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.GetEnvironment
 */
export const getEnvironment = createQueryService({
  service: {
    methods: {
      getEnvironment: {
        name: "GetEnvironment",
        kind: MethodKind.Unary,
        I: GetEnvironmentRequest,
        O: GetEnvironmentResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).getEnvironment;

/**
 * @generated from rpc akuity.io.kargo.service.v1alpha1.KargoService.PromoteEnvironment
 */
export const promoteEnvironment = createQueryService({
  service: {
    methods: {
      promoteEnvironment: {
        name: "PromoteEnvironment",
        kind: MethodKind.Unary,
        I: PromoteEnvironmentRequest,
        O: PromoteEnvironmentResponse,
      },
    },
    typeName: "akuity.io.kargo.service.v1alpha1.KargoService",
  },
}).promoteEnvironment;