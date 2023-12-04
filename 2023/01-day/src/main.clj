(ns main
  (:require [java-time.api :as t])
  (:require [clojure.java.io :as io])
  (:require [clojure.core.reducers :as r]))


(defn read-file [file-path]
  (with-open [reader (io/reader file-path)]
    (doall (line-seq reader))))

(defn get-input []
  (read-file "resources/input.txt"))

(defn get-line-digit [line]
  (let [first-digit (re-find (re-pattern "\\d") line)
        last-digit (re-find (re-pattern "\\d(?!.*\\d)") line)]
    (str (or first-digit "") (or last-digit ""))))

(defn get-line-number [line]
  (Integer/parseInt (get-line-digit line)))

(defn debug [opts]
  (let [input (get-input)]
  (print (map get-line-number input))))

(defn run [opts]
  (let [input (get-input)]
  (print (r/fold  + (r/map get-line-number input)))))
