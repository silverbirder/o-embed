// from https://gist.github.com/donmccurdy/6d073ce2c6f3951312dfa45da14a420f

const wildcardToRegExp = (wildcard: string): RegExp => {
  const _regExpEscape = (s: string) => s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  return new RegExp(`^${wildcard.split(/\*+/).map(_regExpEscape).join('.*')}$`);
};

export { wildcardToRegExp };
