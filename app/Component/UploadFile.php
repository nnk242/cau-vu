<?php


namespace App\Component;


class UploadFile
{
    public static function removeFile($url)
    {
        try {
            unlink(public_path($url));
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
        return true;
    }

    public static function uploadFile($image)
    {
        $image_name = null;

        if (isset($image)) {
            $image_name = date('Y_m_d', time()) . '_' . time() . '_' . generateRandomString(5) . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('img/upload'), $image_name);
        }
        return $image_name;
    }
}
