export type BlockType = {
  height: number;
  txs: number;
  timestamp: string;
  proposer: AvatarName;
  hash: string;
}

export type BlocksState = {
  items: BlockType[];
}

export type ItemType = Override<BlockType, { proposer: AvatarName }>
