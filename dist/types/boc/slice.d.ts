import BN from 'bn.js';
import { Cell } from './cell';
import { Address } from '../utils/address';
export declare class Slice {
    array: Uint8Array;
    length: number;
    refs: Cell[];

    getFreeBits(): number;
    loadBit(): boolean;
    loadBits(bitLength: number): Uint8Array;
    loadUint(bitLength: number): BN;
    loadInt(bitLength: number): BN;
    loadVarUint(bitLength: number): BN;
    loadCoins(): BN;
    loadAddress(): Address;
    loadRef(): Slice;
}