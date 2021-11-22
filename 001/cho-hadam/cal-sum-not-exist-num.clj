(defn cal-sum-not-exist-num
  "`numbers`에서 찾을 수 없는 0부터 9까지의 숫자를
   모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
   https://programmers.co.kr/learn/courses/30/lessons/86051"
  [numbers]
  (let [numbers-set (set numbers)]
    (reduce (fn [result num]
              (if (contains? numbers-set
                             num)
                result
                (+ result num)))
            0
            (range 10))))

(cal-sum-not-exist-num [1 2 3 4 6 7 8 0]) ;; 14
(cal-sum-not-exist-num [5 8 4 0 6 7 9]) ;; 6
