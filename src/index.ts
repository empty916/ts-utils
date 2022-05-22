type DoTrans<
  P extends string,
  S extends string,
  A extends string
> = `${P}_${Lowercase<S>}${A}`;

export type TransferStr<S extends string> = 
    S extends `${infer Pre}A${infer After}`
  ? DoTrans<Pre, "A", TransferStr<After>>
  : S extends `${infer Pre}B${infer After}`
  ? DoTrans<Pre, "B", TransferStr<After>>
  : S extends `${infer Pre}C${infer After}`
  ? DoTrans<Pre, "C", TransferStr<After>>
  : S extends `${infer Pre}D${infer After}`
  ? DoTrans<Pre, "D", TransferStr<After>>
  : S extends `${infer Pre}E${infer After}`
  ? DoTrans<Pre, "E", TransferStr<After>>
  : S extends `${infer Pre}F${infer After}`
  ? DoTrans<Pre, "F", TransferStr<After>>
  : S extends `${infer Pre}G${infer After}`
  ? DoTrans<Pre, "G", TransferStr<After>>
  : S extends `${infer Pre}H${infer After}`
  ? DoTrans<Pre, "H", TransferStr<After>>
  : S extends `${infer Pre}I${infer After}`
  ? DoTrans<Pre, "I", TransferStr<After>>
  : S extends `${infer Pre}J${infer After}`
  ? DoTrans<Pre, "J", TransferStr<After>>
  : S extends `${infer Pre}K${infer After}`
  ? DoTrans<Pre, "K", TransferStr<After>>
  : S extends `${infer Pre}L${infer After}`
  ? DoTrans<Pre, "L", TransferStr<After>>
  : S extends `${infer Pre}M${infer After}`
  ? DoTrans<Pre, "M", TransferStr<After>>
  : S extends `${infer Pre}N${infer After}`
  ? DoTrans<Pre, "N", TransferStr<After>>
  : S extends `${infer Pre}O${infer After}`
  ? DoTrans<Pre, "O", TransferStr<After>>
  : S extends `${infer Pre}P${infer After}`
  ? DoTrans<Pre, "P", TransferStr<After>>
  : S extends `${infer Pre}Q${infer After}`
  ? DoTrans<Pre, "Q", TransferStr<After>>
  : S extends `${infer Pre}R${infer After}`
  ? DoTrans<Pre, "R", TransferStr<After>>
  : S extends `${infer Pre}S${infer After}`
  ? DoTrans<Pre, "S", TransferStr<After>>
  : S extends `${infer Pre}T${infer After}`
  ? DoTrans<Pre, "T", TransferStr<After>>
  : S extends `${infer Pre}U${infer After}`
  ? DoTrans<Pre, "U", TransferStr<After>>
  : S extends `${infer Pre}V${infer After}`
  ? DoTrans<Pre, "V", TransferStr<After>>
  : S extends `${infer Pre}W${infer After}`
  ? DoTrans<Pre, "W", TransferStr<After>>
  : S extends `${infer Pre}X${infer After}`
  ? DoTrans<Pre, "X", TransferStr<After>>
  : S extends `${infer Pre}Y${infer After}`
  ? DoTrans<Pre, "Y", TransferStr<After>>
  : S extends `${infer Pre}Z${infer After}`
  ? DoTrans<Pre, "Z", TransferStr<After>>
  : S;

type RemoveFirst_<S extends string> = S extends `_${infer C}` ? C : S;

type TransferString<S extends string> = RemoveFirst_<TransferStr<S>>;

type a = TransferStr<"ABbbCDBEFJkakkhkfllMNkdfkJHnfjBhjLGliuglLiuyTOyt">;
