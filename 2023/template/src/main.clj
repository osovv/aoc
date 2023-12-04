(ns main
  (:require [java-time.api :as t])
  (:require [clojure.java.io :as io]))


(defn read-file [file-path]
  (with-open [reader (io/reader file-path)]
    (doall (line-seq reader))))

(defn get-input []
  (read-file "resources/input.txt"))

(defn run [opts]
  (let [input (get-input)]
  (println input)))
