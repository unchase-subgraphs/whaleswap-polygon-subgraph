import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FeeToSetterUpdated,
  FeeToUpdated,
  PairCreated
} from "../generated/Factory/Factory"

export function createFeeToSetterUpdatedEvent(
  newFeeToSett: Address
): FeeToSetterUpdated {
  let feeToSetterUpdatedEvent = changetype<FeeToSetterUpdated>(newMockEvent())

  feeToSetterUpdatedEvent.parameters = new Array()

  feeToSetterUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeToSett",
      ethereum.Value.fromAddress(newFeeToSett)
    )
  )

  return feeToSetterUpdatedEvent
}

export function createFeeToUpdatedEvent(newFeeTo: Address): FeeToUpdated {
  let feeToUpdatedEvent = changetype<FeeToUpdated>(newMockEvent())

  feeToUpdatedEvent.parameters = new Array()

  feeToUpdatedEvent.parameters.push(
    new ethereum.EventParam("newFeeTo", ethereum.Value.fromAddress(newFeeTo))
  )

  return feeToUpdatedEvent
}

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  stable: boolean,
  pair: Address,
  param4: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("stable", ethereum.Value.fromBoolean(stable))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param4", ethereum.Value.fromUnsignedBigInt(param4))
  )

  return pairCreatedEvent
}
