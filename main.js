a.oninput = solve;

function solve() {
  const s = a.value.split("").filter((c) => /[^ \n]/.test(c));

  let mp = {};
  for (c of s) {
    if (!mp[c]) mp[c] = 0;
    ++mp[c];
  }
  unpaired.innerHTML = "";
  paired.innerHTML = "";
  console.log(mp);

  for (c in mp) {
    for (let i = 0; i <Math.floor(mp[c]/2); ++i)
      paired.innerHTML += c;
    if (mp[c] & 1)
      unpaired.innerHTML += c;
  }
}
