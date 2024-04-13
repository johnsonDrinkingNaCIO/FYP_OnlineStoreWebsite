<?php

    function searchFile($directory, $filename)
    {
        $filepath = $directory.'/'.$filename;
        if(file_exists($filepath))
        {
            return $filepath;
        }
        //cant find item. attempt recursive search
        $items = scandir($directory);

        foreach($items as $item)
        {
            if ($item == '.' || $item == '..') {
                continue;
            }

            $path = $directory . '/' . $item;

            if (is_dir($path))
            {
                $result = searchFile($path, $filename);
                if($result)
                {
                    return $result;
                }
            }
        }

      
        return false;
    }


?>