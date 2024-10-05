class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < order.length(); i++) {
            map.put(order.charAt(i), i);
        }

        for (int i = 0; i < words.length - 1; i++) {//words.length-1
            for (int j = 0; j < words[i].length(); j++) {
                if (j >= words[i + 1].length()) return false;//apple, app
                if (words[i].charAt(j) == words[i + 1].charAt(j)) continue; //wait for next round
                if (map.get(words[i].charAt(j)) > map.get(words[i + 1].charAt(j))) return false;

                break;
            }
        }

        return true;
    }
}
