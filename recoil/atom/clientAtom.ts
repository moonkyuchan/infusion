import { atom } from "recoil";

interface Client {
  key: number | null;
  name: string | null;
  num: string | null;
  routine: string | null;
  onOff: boolean | null;
}

export const clientAtom = atom<Client>({
  key: "clientAtom", // 고유한 key 값
  default: {
    key: null,
    name: null,
    num: null,
    routine: null,
    onOff: null,
  }, // 기본 값
});
