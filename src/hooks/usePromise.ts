export const usePromise = (p: Promise<any>, f: () => void) =>
  new Promise<[any, any]>((res, _) => {
    p.then((result) => res([result, null]))
      .catch((err) => res([null, err]))
      .finally(f);
  });
