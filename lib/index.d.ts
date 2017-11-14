// this file has been auto-generated.

declare module "ts-get-safe" {

type GSArrEl<TKeys extends keyof TObj, TObj> = {[P in TKeys]: undefined[] & TObj[P]}[TKeys][number];

function getSafe<TObject, P0 extends keyof TObject>(obj: TObject, p0: P0): TObject[P0];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0]>(obj: TObject, p0: P0, p1: P1): TObject[P0][P1];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1]>(obj: TObject, p0: P0, p1: P1, p2: P2): TObject[P0][P1][P2];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], P3 extends keyof TObject[P0][P1][P2]>(obj: TObject, p0: P0, p1: P1, p2: P2, p3: P3): TObject[P0][P1][P2][P3];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], P3 extends keyof TObject[P0][P1][P2], P4 extends keyof TObject[P0][P1][P2][P3]>(obj: TObject, p0: P0, p1: P1, p2: P2, p3: P3, p4: P4): TObject[P0][P1][P2][P3][P4];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], P3 extends keyof TObject[P0][P1][P2], P4 extends keyof TObject[P0][P1][P2][P3], P5 extends keyof TObject[P0][P1][P2][P3][P4]>(obj: TObject, p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5): TObject[P0][P1][P2][P3][P4][P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], P3 extends keyof TObject[P0][P1][P2], P4 extends keyof TObject[P0][P1][P2][P3], A5 extends GSArrEl<P4, TObject[P0][P1][P2][P3]>>(obj: TObject, p0: P0, p1: P1, p2: P2, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], P3 extends keyof TObject[P0][P1][P2], A4 extends GSArrEl<P3, TObject[P0][P1][P2]>>(obj: TObject, p0: P0, p1: P1, p2: P2, p3: P3, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], P3 extends keyof TObject[P0][P1][P2], A4 extends GSArrEl<P3, TObject[P0][P1][P2]>, P5 extends keyof A4>(obj: TObject, p0: P0, p1: P1, p2: P2, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], P3 extends keyof TObject[P0][P1][P2], A4 extends GSArrEl<P3, TObject[P0][P1][P2]>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, p1: P1, p2: P2, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], A3 extends GSArrEl<P2, TObject[P0][P1]>>(obj: TObject, p0: P0, p1: P1, p2: P2, a3: number): A3;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], A3 extends GSArrEl<P2, TObject[P0][P1]>, P4 extends keyof A3>(obj: TObject, p0: P0, p1: P1, p2: P2, a3: number, p4: P4): A3[P4];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], A3 extends GSArrEl<P2, TObject[P0][P1]>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, p0: P0, p1: P1, p2: P2, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], A3 extends GSArrEl<P2, TObject[P0][P1]>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, p0: P0, p1: P1, p2: P2, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], A3 extends GSArrEl<P2, TObject[P0][P1]>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, p0: P0, p1: P1, p2: P2, a3: number, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], A3 extends GSArrEl<P2, TObject[P0][P1]>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, p0: P0, p1: P1, p2: P2, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], P2 extends keyof TObject[P0][P1], A3 extends GSArrEl<P2, TObject[P0][P1]>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, p1: P1, p2: P2, a3: number, a4: number, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>>(obj: TObject, p0: P0, p1: P1, a2: number): A2;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, P3 extends keyof A2>(obj: TObject, p0: P0, p1: P1, a2: number, p3: P3): A2[P3];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, P3 extends keyof A2, P4 extends keyof A2[P3]>(obj: TObject, p0: P0, p1: P1, a2: number, p3: P3, p4: P4): A2[P3][P4];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, P3 extends keyof A2, P4 extends keyof A2[P3], P5 extends keyof A2[P3][P4]>(obj: TObject, p0: P0, p1: P1, a2: number, p3: P3, p4: P4, p5: P5): A2[P3][P4][P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, P3 extends keyof A2, P4 extends keyof A2[P3], A5 extends GSArrEl<P4, A2[P3]>>(obj: TObject, p0: P0, p1: P1, a2: number, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>>(obj: TObject, p0: P0, p1: P1, a2: number, p3: P3, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, P5 extends keyof A4>(obj: TObject, p0: P0, p1: P1, a2: number, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, p1: P1, a2: number, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, A3 extends GSArrEl<keyof A2, A2>>(obj: TObject, p0: P0, p1: P1, a2: number, a3: number): A3;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3>(obj: TObject, p0: P0, p1: P1, a2: number, a3: number, p4: P4): A3[P4];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, p0: P0, p1: P1, a2: number, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, p0: P0, p1: P1, a2: number, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, p0: P0, p1: P1, a2: number, a3: number, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, p0: P0, p1: P1, a2: number, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, P1 extends keyof TObject[P0], A2 extends GSArrEl<P1, TObject[P0]>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, p1: P1, a2: number, a3: number, a4: number, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>>(obj: TObject, p0: P0, a1: number): A1;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1>(obj: TObject, p0: P0, a1: number, p2: P2): A1[P2];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, P3 extends keyof A1[P2]>(obj: TObject, p0: P0, a1: number, p2: P2, p3: P3): A1[P2][P3];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, P3 extends keyof A1[P2], P4 extends keyof A1[P2][P3]>(obj: TObject, p0: P0, a1: number, p2: P2, p3: P3, p4: P4): A1[P2][P3][P4];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, P3 extends keyof A1[P2], P4 extends keyof A1[P2][P3], P5 extends keyof A1[P2][P3][P4]>(obj: TObject, p0: P0, a1: number, p2: P2, p3: P3, p4: P4, p5: P5): A1[P2][P3][P4][P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, P3 extends keyof A1[P2], P4 extends keyof A1[P2][P3], A5 extends GSArrEl<P4, A1[P2][P3]>>(obj: TObject, p0: P0, a1: number, p2: P2, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, P3 extends keyof A1[P2], A4 extends GSArrEl<P3, A1[P2]>>(obj: TObject, p0: P0, a1: number, p2: P2, p3: P3, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, P3 extends keyof A1[P2], A4 extends GSArrEl<P3, A1[P2]>, P5 extends keyof A4>(obj: TObject, p0: P0, a1: number, p2: P2, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, P3 extends keyof A1[P2], A4 extends GSArrEl<P3, A1[P2]>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, a1: number, p2: P2, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>>(obj: TObject, p0: P0, a1: number, p2: P2, a3: number): A3;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, P4 extends keyof A3>(obj: TObject, p0: P0, a1: number, p2: P2, a3: number, p4: P4): A3[P4];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, p0: P0, a1: number, p2: P2, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, p0: P0, a1: number, p2: P2, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, p0: P0, a1: number, p2: P2, a3: number, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, p0: P0, a1: number, p2: P2, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, a1: number, p2: P2, a3: number, a4: number, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>>(obj: TObject, p0: P0, a1: number, a2: number): A2;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2>(obj: TObject, p0: P0, a1: number, a2: number, p3: P3): A2[P3];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, P4 extends keyof A2[P3]>(obj: TObject, p0: P0, a1: number, a2: number, p3: P3, p4: P4): A2[P3][P4];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, P4 extends keyof A2[P3], P5 extends keyof A2[P3][P4]>(obj: TObject, p0: P0, a1: number, a2: number, p3: P3, p4: P4, p5: P5): A2[P3][P4][P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, P4 extends keyof A2[P3], A5 extends GSArrEl<P4, A2[P3]>>(obj: TObject, p0: P0, a1: number, a2: number, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>>(obj: TObject, p0: P0, a1: number, a2: number, p3: P3, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, P5 extends keyof A4>(obj: TObject, p0: P0, a1: number, a2: number, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, a1: number, a2: number, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>>(obj: TObject, p0: P0, a1: number, a2: number, a3: number): A3;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3>(obj: TObject, p0: P0, a1: number, a2: number, a3: number, p4: P4): A3[P4];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, p0: P0, a1: number, a2: number, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, p0: P0, a1: number, a2: number, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, p0: P0, a1: number, a2: number, a3: number, a4: number): A4;
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, p0: P0, a1: number, a2: number, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, P0 extends keyof TObject, A1 extends GSArrEl<P0, TObject>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, p0: P0, a1: number, a2: number, a3: number, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>>(obj: TObject, a0: number): A0;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0>(obj: TObject, a0: number, p1: P1): A0[P1];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1]>(obj: TObject, a0: number, p1: P1, p2: P2): A0[P1][P2];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], P3 extends keyof A0[P1][P2]>(obj: TObject, a0: number, p1: P1, p2: P2, p3: P3): A0[P1][P2][P3];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], P3 extends keyof A0[P1][P2], P4 extends keyof A0[P1][P2][P3]>(obj: TObject, a0: number, p1: P1, p2: P2, p3: P3, p4: P4): A0[P1][P2][P3][P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], P3 extends keyof A0[P1][P2], P4 extends keyof A0[P1][P2][P3], P5 extends keyof A0[P1][P2][P3][P4]>(obj: TObject, a0: number, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5): A0[P1][P2][P3][P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], P3 extends keyof A0[P1][P2], P4 extends keyof A0[P1][P2][P3], A5 extends GSArrEl<P4, A0[P1][P2][P3]>>(obj: TObject, a0: number, p1: P1, p2: P2, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], P3 extends keyof A0[P1][P2], A4 extends GSArrEl<P3, A0[P1][P2]>>(obj: TObject, a0: number, p1: P1, p2: P2, p3: P3, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], P3 extends keyof A0[P1][P2], A4 extends GSArrEl<P3, A0[P1][P2]>, P5 extends keyof A4>(obj: TObject, a0: number, p1: P1, p2: P2, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], P3 extends keyof A0[P1][P2], A4 extends GSArrEl<P3, A0[P1][P2]>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, p1: P1, p2: P2, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], A3 extends GSArrEl<P2, A0[P1]>>(obj: TObject, a0: number, p1: P1, p2: P2, a3: number): A3;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], A3 extends GSArrEl<P2, A0[P1]>, P4 extends keyof A3>(obj: TObject, a0: number, p1: P1, p2: P2, a3: number, p4: P4): A3[P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], A3 extends GSArrEl<P2, A0[P1]>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, a0: number, p1: P1, p2: P2, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], A3 extends GSArrEl<P2, A0[P1]>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, a0: number, p1: P1, p2: P2, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], A3 extends GSArrEl<P2, A0[P1]>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, a0: number, p1: P1, p2: P2, a3: number, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], A3 extends GSArrEl<P2, A0[P1]>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, a0: number, p1: P1, p2: P2, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, P2 extends keyof A0[P1], A3 extends GSArrEl<P2, A0[P1]>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, p1: P1, p2: P2, a3: number, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>>(obj: TObject, a0: number, p1: P1, a2: number): A2;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, P3 extends keyof A2>(obj: TObject, a0: number, p1: P1, a2: number, p3: P3): A2[P3];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, P3 extends keyof A2, P4 extends keyof A2[P3]>(obj: TObject, a0: number, p1: P1, a2: number, p3: P3, p4: P4): A2[P3][P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, P3 extends keyof A2, P4 extends keyof A2[P3], P5 extends keyof A2[P3][P4]>(obj: TObject, a0: number, p1: P1, a2: number, p3: P3, p4: P4, p5: P5): A2[P3][P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, P3 extends keyof A2, P4 extends keyof A2[P3], A5 extends GSArrEl<P4, A2[P3]>>(obj: TObject, a0: number, p1: P1, a2: number, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>>(obj: TObject, a0: number, p1: P1, a2: number, p3: P3, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, P5 extends keyof A4>(obj: TObject, a0: number, p1: P1, a2: number, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, p1: P1, a2: number, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, A3 extends GSArrEl<keyof A2, A2>>(obj: TObject, a0: number, p1: P1, a2: number, a3: number): A3;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3>(obj: TObject, a0: number, p1: P1, a2: number, a3: number, p4: P4): A3[P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, a0: number, p1: P1, a2: number, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, a0: number, p1: P1, a2: number, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, a0: number, p1: P1, a2: number, a3: number, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, a0: number, p1: P1, a2: number, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, P1 extends keyof A0, A2 extends GSArrEl<P1, A0>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, p1: P1, a2: number, a3: number, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>>(obj: TObject, a0: number, a1: number): A1;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1>(obj: TObject, a0: number, a1: number, p2: P2): A1[P2];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, P3 extends keyof A1[P2]>(obj: TObject, a0: number, a1: number, p2: P2, p3: P3): A1[P2][P3];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, P3 extends keyof A1[P2], P4 extends keyof A1[P2][P3]>(obj: TObject, a0: number, a1: number, p2: P2, p3: P3, p4: P4): A1[P2][P3][P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, P3 extends keyof A1[P2], P4 extends keyof A1[P2][P3], P5 extends keyof A1[P2][P3][P4]>(obj: TObject, a0: number, a1: number, p2: P2, p3: P3, p4: P4, p5: P5): A1[P2][P3][P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, P3 extends keyof A1[P2], P4 extends keyof A1[P2][P3], A5 extends GSArrEl<P4, A1[P2][P3]>>(obj: TObject, a0: number, a1: number, p2: P2, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, P3 extends keyof A1[P2], A4 extends GSArrEl<P3, A1[P2]>>(obj: TObject, a0: number, a1: number, p2: P2, p3: P3, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, P3 extends keyof A1[P2], A4 extends GSArrEl<P3, A1[P2]>, P5 extends keyof A4>(obj: TObject, a0: number, a1: number, p2: P2, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, P3 extends keyof A1[P2], A4 extends GSArrEl<P3, A1[P2]>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, a1: number, p2: P2, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>>(obj: TObject, a0: number, a1: number, p2: P2, a3: number): A3;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, P4 extends keyof A3>(obj: TObject, a0: number, a1: number, p2: P2, a3: number, p4: P4): A3[P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, a0: number, a1: number, p2: P2, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, a0: number, a1: number, p2: P2, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, a0: number, a1: number, p2: P2, a3: number, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, a0: number, a1: number, p2: P2, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, P2 extends keyof A1, A3 extends GSArrEl<P2, A1>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, a1: number, p2: P2, a3: number, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>>(obj: TObject, a0: number, a1: number, a2: number): A2;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2>(obj: TObject, a0: number, a1: number, a2: number, p3: P3): A2[P3];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, P4 extends keyof A2[P3]>(obj: TObject, a0: number, a1: number, a2: number, p3: P3, p4: P4): A2[P3][P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, P4 extends keyof A2[P3], P5 extends keyof A2[P3][P4]>(obj: TObject, a0: number, a1: number, a2: number, p3: P3, p4: P4, p5: P5): A2[P3][P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, P4 extends keyof A2[P3], A5 extends GSArrEl<P4, A2[P3]>>(obj: TObject, a0: number, a1: number, a2: number, p3: P3, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>>(obj: TObject, a0: number, a1: number, a2: number, p3: P3, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, P5 extends keyof A4>(obj: TObject, a0: number, a1: number, a2: number, p3: P3, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, P3 extends keyof A2, A4 extends GSArrEl<P3, A2>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, a1: number, a2: number, p3: P3, a4: number, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>>(obj: TObject, a0: number, a1: number, a2: number, a3: number): A3;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3>(obj: TObject, a0: number, a1: number, a2: number, a3: number, p4: P4): A3[P4];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, P5 extends keyof A3[P4]>(obj: TObject, a0: number, a1: number, a2: number, a3: number, p4: P4, p5: P5): A3[P4][P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, P4 extends keyof A3, A5 extends GSArrEl<P4, A3>>(obj: TObject, a0: number, a1: number, a2: number, a3: number, p4: P4, a5: number): A5;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>>(obj: TObject, a0: number, a1: number, a2: number, a3: number, a4: number): A4;
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, P5 extends keyof A4>(obj: TObject, a0: number, a1: number, a2: number, a3: number, a4: number, p5: P5): A4[P5];
function getSafe<TObject, A0 extends GSArrEl<keyof TObject, TObject>, A1 extends GSArrEl<keyof A0, A0>, A2 extends GSArrEl<keyof A1, A1>, A3 extends GSArrEl<keyof A2, A2>, A4 extends GSArrEl<keyof A3, A3>, A5 extends GSArrEl<keyof A4, A4>>(obj: TObject, a0: number, a1: number, a2: number, a3: number, a4: number, a5: number): A5;

export = getSafe;
}

