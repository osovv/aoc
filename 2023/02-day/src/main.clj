(ns main
  (:require [clojure.java.io :as io])
  (:require [clojure.core.reducers :as r])
  (:require [clojure.string :as s]))


(defn read-file [file-path]
  (with-open [reader (io/reader file-path)]
    (doall (line-seq reader))))

(defn get-input []
  (read-file "resources/input.txt"))


(defn parse-turn [turn-str]
  (into {} (map #(let [[num color] (s/split % #"\s")]
                  [(keyword color) (Integer. num)])
                (s/split turn-str #",\s*"))))

(defn parse-game [game-str]
  (let [[_ game-id turns-str] (re-matches #"(Game \d+): (.*)" game-str)]
    {:id (Integer. (subs game-id 5))
     :turns (map parse-turn (s/split turns-str #";\s*"))}))

(defn good-turn? [turn]
  (and (<= (get turn :red 0) 12)
       (<= (get turn :green 0) 13)
       (<= (get turn :blue 0) 14)))

(defn good-game? [game]
  (every? good-turn? (get game :turns)))


(defn get-game-id [game]
  (get game :id))


(defn run [opts]
  (let [input (get-input)
        parsed (map parse-game input)
        good-games (filter good-game? parsed)
        result  (r/fold  + (r/map get-game-id good-games))]
  (println result)))


(main/run [])
